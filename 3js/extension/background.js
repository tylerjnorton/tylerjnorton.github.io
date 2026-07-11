var FANTASY_URL = 'https://www.fantrax.com/fxea/general/getStandings?leagueId=atrubo6smgi02v9p';

// Headlines come from ESPN's per-league news endpoints. Only these four categories are shown.
// Soccer aggregates a few major competitions so it isn't just one league.
var NEWS_SOURCES = [
  { label: 'SOCCER', paths: ['soccer/eng.1', 'soccer/fifa.world', 'soccer/usa.1'] },
  { label: 'NBA',    paths: ['basketball/nba'] },
  { label: 'NFL',    paths: ['football/nfl'] },
  { label: 'MLB',    paths: ['baseball/mlb'] }
];
var NEWS_PER_SOURCE = 6;

function fetchNewsPath(path) {
  return fetch('https://site.api.espn.com/apis/site/v2/sports/' + path + '/news')
    .then(function (res) { return res.ok ? res.json() : { articles: [] }; })
    .then(function (data) { return data.articles || []; })
    .catch(function () { return []; });
}

// For one category (which may span several leagues), interleave the leagues' articles for
// variety, dedup by headline, and cap the total so no one category floods the rotation.
function collectSourceHeadlines(src) {
  return Promise.all(src.paths.map(fetchNewsPath)).then(function (lists) {
    var maxLen = 0;
    lists.forEach(function (l) { maxLen = Math.max(maxLen, l.length); });

    var out = [];
    var seen = {};
    for (var i = 0; i < maxLen && out.length < NEWS_PER_SOURCE; i++) {
      for (var j = 0; j < lists.length && out.length < NEWS_PER_SOURCE; j++) {
        var art = lists[j][i];
        if (!art) continue;
        var text = (art.headline || '').trim();
        if (!text || seen[text]) continue;
        seen[text] = true;
        out.push({ source: src.label, text: text });
      }
    }
    return out;
  });
}

function fetchAllHeadlines() {
  return Promise.all(NEWS_SOURCES.map(collectSourceHeadlines))
    .then(function (perSource) { return [].concat.apply([], perSource); })
    .catch(function () { return []; });
}

function pad(n) { return n < 10 ? '0' + n : '' + n; }

function ymd(date) {
  return '' + date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate());
}

// Yesterday's results stay in the window until 5pm local time the next day, then drop off.
function scoresDateParam() {
  var now = new Date();
  var today = ymd(now);
  if (now.getHours() >= 17) return today;

  var yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  return ymd(yesterday) + '-' + today;
}

// All network calls live here in the service worker rather than the content script, since
// requests made from here are governed only by this extension's own permissions -- not by
// whatever Content-Security-Policy the page you're currently browsing happens to set.
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg && msg.type === 'FETCH_LEAGUE') {
    var url = 'https://site.api.espn.com/apis/site/v2/sports/' + msg.path + '/scoreboard?dates=' + scoresDateParam();
    fetch(url)
      .then(function (res) { return res.ok ? res.json() : { events: [] }; })
      .then(function (data) { sendResponse({ ok: true, events: data.events || [] }); })
      .catch(function () { sendResponse({ ok: false, events: [] }); });
    return true;
  }

  if (msg && msg.type === 'FETCH_HEADLINES') {
    fetchAllHeadlines()
      .then(function (headlines) { sendResponse({ ok: true, headlines: headlines }); })
      .catch(function () { sendResponse({ ok: false, headlines: [] }); });
    return true;
  }

  if (msg && msg.type === 'FETCH_SUMMARY') {
    var summaryUrl = 'https://site.api.espn.com/apis/site/v2/sports/' + msg.path + '/summary?event=' + msg.eventId;
    fetch(summaryUrl)
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) { sendResponse({ ok: true, data: data }); })
      .catch(function () { sendResponse({ ok: false, data: null }); });
    return true;
  }

  if (msg && msg.type === 'FETCH_FANTASY') {
    fetch(FANTASY_URL)
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (data) { sendResponse({ ok: true, teams: data || [] }); })
      .catch(function () { sendResponse({ ok: false, teams: [] }); });
    return true;
  }

  // The overlay needs to counteract this tab's actual zoom level so it always renders at the
  // same physical size, whether the zoom just changed or the page loaded already zoomed.
  // chrome.tabs.getZoom gives the real current value with no ambiguity -- unlike inferring it
  // from devicePixelRatio, which only reveals changes relative to whatever was true at injection.
  if (msg && msg.type === 'GET_ZOOM') {
    var tabId = sender && sender.tab && sender.tab.id;
    if (tabId == null) { sendResponse({ ok: false, zoomFactor: 1 }); return true; }
    chrome.tabs.getZoom(tabId, function (zoomFactor) {
      sendResponse({ ok: true, zoomFactor: zoomFactor });
    });
    return true;
  }

  return false;
});

// Push zoom changes to the affected tab immediately, rather than waiting for it to ask.
if (chrome.tabs && chrome.tabs.onZoomChange) {
  chrome.tabs.onZoomChange.addListener(function (info) {
    chrome.tabs.sendMessage(info.tabId, { type: 'ZOOM_CHANGED', zoomFactor: info.newZoomFactor }, function () {
      if (chrome.runtime.lastError) { /* no content script on that tab (e.g. chrome:// pages) */ }
    });
  });
}
