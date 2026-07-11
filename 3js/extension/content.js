(function () {
  'use strict';

  if (window.top !== window.self) return; // only overlay the top-level page, not nested iframes
  if (document.getElementById('espn-bottomline-host')) return; // avoid double-injection

  var LEAGUES = [
    { label: 'MLB',   path: 'baseball/mlb',                         sport: 'baseball' },
    { label: 'CBB',   path: 'baseball/college-baseball',             sport: 'baseball' },
    { label: 'WNBA',  path: 'basketball/wnba',                       sport: 'basketball' },
    { label: 'NBA',   path: 'basketball/nba',                        sport: 'basketball' },
    { label: 'NFL',   path: 'football/nfl',                          sport: 'football' },
    { label: 'NCAAF', path: 'football/college-football',             sport: 'football' },
    { label: 'NHL',   path: 'hockey/nhl',                            sport: 'hockey' },
    { label: 'NCAAM', path: 'basketball/mens-college-basketball',    sport: 'basketball' },
    { label: 'NCAAW', path: 'basketball/womens-college-basketball',  sport: 'basketball' },
    { label: 'EPL',   path: 'soccer/eng.1',                          sport: 'soccer' },
    { label: 'MLS',   path: 'soccer/usa.1',                          sport: 'soccer' },
    { label: 'WC',    path: 'soccer/fifa.world',                     sport: 'soccer' },
    { label: 'FTSY',  path: null,                                    sport: 'fantasy' }
  ];

  var DETAIL_MS = 4000;
  var SCORES_REFRESH_MS = 90 * 1000;
  var NEWS_REFRESH_MS = 20 * 60 * 1000; // NewsAPI free tier is capped at 100 req/day
  var FLIP_ANIM_MS = 400;

  var BUMPER_EXPAND_MS = 450;
  var BUMPER_HOLD_MS = 1800; // how long the full list of leagues sits on screen before collapsing

  var gameList = [];
  var headlineList = [];
  var entries = [];
  var currentIndex = 0;
  var currentBadgeLeague = null;

  // ---------- Cross-navigation persistence ----------
  // Content scripts are re-injected fresh on every page load, which would otherwise mean the
  // ticker restarts (re-fetches, re-plays the intro bumper) every time you click a link. Instead
  // we mirror the rotation position and cached data into chrome.storage.session, which survives
  // across page loads for the life of the browsing session, and resume from it on injection.
  var STORAGE_KEY = 'bottomlineState';
  var persisted = {};

  function persistState(patch) {
    for (var k in patch) { if (patch.hasOwnProperty(k)) persisted[k] = patch[k]; }
    try {
      var obj = {};
      obj[STORAGE_KEY] = persisted;
      chrome.storage.session.set(obj);
    } catch (e) {}
  }

  function persistPosition() {
    persistState({
      currentIndex: currentIndex,
      currentDetailIndex: currentDetailIndex,
      lastGameLeague: lastGameLeague,
      currentBadgeLeague: currentBadgeLeague,
      introPlayed: introPlayed
    });
  }

  // ---------- Shadow DOM setup so host-page CSS can't bleed in (or our CSS bleed out) ----------

  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap';
  document.head.appendChild(fontLink);

  var host = document.createElement('div');
  host.id = 'espn-bottomline-host';
  document.documentElement.appendChild(host);

  var shadow = host.attachShadow({ mode: 'open' });

  var styleEl = document.createElement('style');
  styleEl.textContent = [
    ':host {',
    '  all: initial;',
    '  position: fixed !important;',
    '  left: 0;',
    '  right: 0;',
    '  bottom: 0;',
    '  z-index: 2147483647;',
    '  display: block;',
    '  transform-origin: left bottom;',
    '}',
    '* { box-sizing: border-box; }',
    ':host, .bottomline { font-family: "Oswald", "Arial Narrow", Arial, sans-serif; }',

    '.bottomline {',
    '  display: flex;',
    '  align-items: stretch;',
    '  height: 80px;',
    '  background: #000;',
    '  border-top: 2px solid #e2231a;',
    '  box-shadow: 0 -4px 16px rgba(0,0,0,0.5);',
    '}',

    '.bl-badge { flex: 0 0 auto; display: flex; align-items: stretch; z-index: 2; }',

    '.bl-espn-box {',
    '  display: flex; align-items: center; justify-content: center;',
    '  min-width: 150px; padding: 0 20px 0 18px;',
    '  background: #e2231a; transform: skewX(-12deg); margin-left: -10px;',
    '}',
    '.bl-espn-box span {',
    '  display: inline-block; transform: skewX(12deg);',
    '  font-weight: 700; font-style: italic; color: #fff; font-size: 22px;',
    '  letter-spacing: 0.5px; text-transform: uppercase; white-space: nowrap;',
    '}',

    '.bl-stage {',
    '  flex: 1 1 auto; height: 100%; display: flex; align-items: center;',
    '  justify-content: flex-start; padding-left: 32px; background: #000; overflow: hidden;',
    '}',

    '.bl-card { display: flex; align-items: baseline; flex-wrap: nowrap; white-space: nowrap; }',
    '.bl-scoreline, .bl-detail-slot { display: inline-flex; align-items: baseline; white-space: nowrap; }',

    '.slide-out { animation: bl-slide-out 0.4s cubic-bezier(0.5,0,1,0.5) forwards; }',
    '.slide-in { animation: bl-slide-in 0.4s cubic-bezier(0,0.5,0.5,1) forwards; }',
    '@keyframes bl-slide-out { from { transform: translateY(0); opacity: 1; } to { transform: translateY(-30px); opacity: 0; } }',
    '@keyframes bl-slide-in { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',

    '.bl-team { color: #fff; font-weight: 500; font-size: 34px; letter-spacing: 0.2px; text-transform: uppercase; }',
    '.bl-team.winner { color: #fff; font-weight: 600; }',
    '.bl-score { color: #c9a961; font-weight: 600; font-size: 34px; font-variant-numeric: tabular-nums; margin: 0 14px 0 6px; }',
    '.bl-score.winner { color: #c9a961; }',
    '.bl-at { color: #4a4a4a; font-weight: 400; font-size: 22px; margin: 0 14px; }',
    '.bl-status { margin-left: 18px; color: #c9a961; font-size: 34px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase; }',
    '.bl-status.live { color: #ff4136; }',
    '.bl-status--rank { margin-left: 0; margin-right: 16px; }',
    '.bl-detail { display: inline-block; margin-left: 18px; padding-left: 18px; border-left: 1px solid #333; color: #aaa; font-size: 34px; font-weight: 400; letter-spacing: 0.2px; }',
    '.bl-empty { color: #666; font-size: 16px; font-weight: 400; font-style: italic; letter-spacing: 0.2px; }',

    '.bl-headline {',
    '  color: #f5f5f5; font-weight: 500; font-size: 24px; letter-spacing: 0.1px;',
    '  white-space: normal; line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2;',
    '  -webkit-box-orient: vertical; overflow: hidden; flex: 0 1 auto; min-width: 0;',
    '  max-width: 62vw; margin-right: 18px;',
    '}',
    '.bl-card.bl-card--headline { align-items: center; }',

    '.bl-bumper {',
    '  position: absolute; inset: 0; width: 0; overflow: hidden; background: #e2231a;',
    '  z-index: 10; display: flex; align-items: center; justify-content: center;',
    '  transform: skewX(-12deg); transform-origin: left center; transition: width 0.45s ease-in-out;',
    '}',
    '.bl-bumper.active { width: 100%; }',
    '.bl-bumper-list { display: flex; align-items: center; justify-content: center; gap: 44px; transform: skewX(12deg); white-space: nowrap; }',
    '.bl-bumper-list span { display: inline-block; color: #fff; font-weight: 700; font-style: italic; font-size: 32px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }',

    '.bl-toggle { position: absolute; right: 0; top: 0; width: 10px; height: 10px; background: #e2231a; cursor: pointer; z-index: 20; }',
    '.bl-toggle--off { background: #444; }'
  ].join('\n');
  shadow.appendChild(styleEl);

  var wrapper = document.createElement('div');
  wrapper.innerHTML =
    '<div class="bottomline" id="blBar">' +
      '<div class="bl-badge">' +
        '<div class="bl-espn-box"><span id="blBadgeText">ESPN</span></div>' +
      '</div>' +
      '<div class="bl-stage">' +
        '<div class="bl-card" id="blCard">' +
          '<span class="bl-scoreline" id="blScoreLine"><span class="bl-empty">Loading scores &amp; headlines&hellip;</span></span>' +
          '<span class="bl-detail-slot" id="blDetailSlot"></span>' +
        '</div>' +
      '</div>' +
      '<div class="bl-bumper" id="blBumper">' +
        '<div class="bl-bumper-list" id="blBumperList"></div>' +
      '</div>' +
    '</div>' +
    '<div class="bl-toggle" id="blToggle" title="Show/hide ticker"></div>';
  shadow.appendChild(wrapper);

  function $(id) { return shadow.getElementById(id); }

  // Tiny show/hide switch pinned to the bottom-right corner. Hides the ticker bar but stays
  // visible itself so it can bring the bar back. State survives navigations with the rest of
  // the persisted rotation state.
  function setBarHidden(hidden) {
    $('blBar').style.display = hidden ? 'none' : 'flex';
    $('blToggle').classList.toggle('bl-toggle--off', hidden);
  }

  $('blToggle').addEventListener('click', function () {
    var hidden = $('blBar').style.display !== 'none';
    setBarHidden(hidden);
    persistState({ hidden: hidden });
  });

  // Browser zoom scales every CSS px uniformly, which would otherwise make the bar grow or
  // shrink as the user zooms whatever page it's overlaid on. Lock it to its true default size,
  // anchored to the bottom-left corner where the bar is pinned.
  (function () {
    var scale = 1;
    var zoomKnown = false; // true once chrome.tabs.getZoom has given us a real answer

    function applyScale() {
      host.style.transform = 'scale(' + scale + ')';
      if (window.innerWidth) {
        host.style.right = 'auto';
        host.style.width = (window.innerWidth / scale) + 'px';
      }
    }

    function setZoomFactor(zoomFactor) {
      if (!zoomFactor || zoomFactor <= 0) return;
      zoomKnown = true;
      scale = 1 / zoomFactor;
      applyScale();
    }

    // chrome.tabs.getZoom reports this tab's actual current zoom percentage directly from
    // Chrome -- accurate even if the page was already zoomed before this script ever ran,
    // unlike inferring it from devicePixelRatio (which only reveals *changes* relative to
    // whatever zoom happened to be active at injection time).
    sendMessage({ type: 'GET_ZOOM' }).then(function (res) {
      if (res && res.ok) setZoomFactor(res.zoomFactor);
    });

    try {
      chrome.runtime.onMessage.addListener(function (msg) {
        if (msg && msg.type === 'ZOOM_CHANGED') setZoomFactor(msg.zoomFactor);
      });
    } catch (e) {}

    // Fallback in case messaging never resolves: less precise (relative to load time only),
    // but better than nothing. Backs off permanently once real zoom data arrives.
    var baseDPR = window.devicePixelRatio || 1;
    window.addEventListener('resize', function () {
      if (zoomKnown) return;
      scale = baseDPR / (window.devicePixelRatio || 1);
      applyScale();
    });
  })();

  // ---------- Data fetching (via the background service worker, immune to page CSPs) ----------

  function sendMessage(msg) {
    return new Promise(function (resolve) {
      try {
        chrome.runtime.sendMessage(msg, function (res) {
          if (chrome.runtime.lastError) { resolve(null); return; }
          resolve(res || null);
        });
      } catch (e) {
        resolve(null);
      }
    });
  }

  function fetchLeague(league) {
    if (league.sport === 'fantasy') return fetchFantasyLeague(league);
    return sendMessage({ type: 'FETCH_LEAGUE', path: league.path }).then(function (res) {
      if (!res || !res.ok) return [];
      return (res.events || []).map(function (ev) {
        return { kind: 'game', league: league, event: ev };
      });
    });
  }

  // Fantrax "team roto" league where every fantasy team IS a real MLB team's aggregate stats.
  // Each standings row becomes its own entry so the rotation scrolls through the full table.
  function fetchFantasyLeague(league) {
    return sendMessage({ type: 'FETCH_FANTASY' }).then(function (res) {
      if (!res || !res.ok) return [];
      return (res.teams || [])
        .slice()
        .sort(function (a, b) { return a.rank - b.rank; })
        .map(function (team) {
          return { kind: 'game', league: league, fantasy: team };
        });
    });
  }

  function ordinalSuffix(n) {
    var mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 13) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  // Headlines are aggregated ESPN news (soccer/nba/nfl/mlb only), assembled in the background
  // service worker; each item is already { source: <category label>, text: <headline> }.
  function fetchHeadlines() {
    return sendMessage({ type: 'FETCH_HEADLINES' }).then(function (res) {
      if (!res || !res.ok) return [];
      return (res.headlines || [])
        .map(function (h) {
          return { kind: 'headline', source: h.source || 'NEWS', text: h.text };
        })
        .filter(function (h) { return h.text; });
    });
  }

  function findSide(competitors, side) {
    for (var i = 0; i < competitors.length; i++) {
      if (competitors[i].homeAway === side) return competitors[i];
    }
    return null;
  }

  function localTime(isoDate) {
    var d = new Date(isoDate);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function shortName(athlete) {
    if (!athlete) return '';
    if (athlete.shortName) return athlete.shortName;
    if (athlete.firstName && athlete.lastName) return athlete.firstName.charAt(0) + '. ' + athlete.lastName;
    return athlete.displayName || '';
  }

  // Each team competitor carries its own top performers (points/goals/avg);
  // pick whichever team's leader has the higher value for a game-wide standout.
  function topLeaderAcrossTeams(competitors, categoryName) {
    var best = null;
    (competitors || []).forEach(function (c) {
      var cat = (c.leaders || []).filter(function (l) { return l.name === categoryName; })[0];
      var top = cat && cat.leaders && cat.leaders[0];
      if (top && top.athlete && (!best || top.value > best.value)) best = top;
    });
    return best;
  }

  // ---------- Lazy per-game summary fetch (win/loss/save pitchers, per-team NFL leaders) ----------

  var summaryCache = {};

  function summaryKey(entry) {
    return entry.league.path + '_' + entry.event.id;
  }

  function needsSummary(entry) {
    if (entry.kind !== 'game') return false;
    if (entry.league.sport === 'fantasy') return false;
    var state = entry.event.status.type.state;
    if (entry.league.sport === 'baseball') return state === 'post';
    if (entry.league.sport === 'football') return state === 'in' || state === 'post';
    return false;
  }

  function getCachedSummary(entry) {
    var c = summaryCache[summaryKey(entry)];
    return c && !c.loading ? c.data : null;
  }

  function ensureSummary(entry) {
    if (!needsSummary(entry)) return;
    var key = summaryKey(entry);
    var state = entry.event.status.type.state;
    var cached = summaryCache[key];
    if (cached && (cached.loading || cached.state === state)) return;

    summaryCache[key] = { loading: true, state: state, data: null };
    sendMessage({ type: 'FETCH_SUMMARY', path: entry.league.path, eventId: entry.event.id }).then(function (res) {
      var data = (res && res.ok) ? res.data : null;
      summaryCache[key] = { loading: false, state: state, data: data };
      onSummaryLoaded(entry);
    });
  }

  function onSummaryLoaded(entry) {
    var cur = entries[currentIndex];
    if (!cur || cur.kind !== 'game') return;
    if (cur.event.id !== entry.event.id || cur.league.path !== entry.league.path) return;
    currentDetails = computeDetails(cur);
    if (currentDetailIndex >= currentDetails.length) currentDetailIndex = Math.max(0, currentDetails.length - 1);
    renderDetailSlot(currentDetails[currentDetailIndex]);
  }

  function extractPitchingDecisions(summary) {
    var result = {};
    var players = (summary.boxscore && summary.boxscore.players) || [];
    players.forEach(function (team) {
      (team.statistics || []).forEach(function (stat) {
        if (stat.type !== 'pitching') return;
        (stat.athletes || []).forEach(function (ath) {
          (ath.notes || []).forEach(function (n) {
            if (n.type !== 'pitchingDecision') return;
            var text = n.text || '';
            var name = shortName(ath.athlete);
            if (text.charAt(0) === 'W') result.win = name + ' (' + text.replace(/^W,\s*/, '') + ')';
            else if (text.charAt(0) === 'L') result.loss = name + ' (' + text.replace(/^L,\s*/, '') + ')';
            else if (text.charAt(0) === 'S') result.save = name + ' (' + text.replace(/^S,\s*/, '') + ' SV)';
          });
        });
      });
    });
    return result;
  }

  function extractFootballTeamLeaders(summary) {
    var byTeam = {};
    var players = (summary.boxscore && summary.boxscore.players) || [];
    players.forEach(function (team) {
      var id = team.team && team.team.id;
      var out = {};
      (team.statistics || []).forEach(function (stat) {
        if (['passing', 'rushing', 'receiving'].indexOf(stat.name) === -1) return;
        var top = stat.athletes && stat.athletes[0];
        if (!top) return;
        var yards = top.stats && top.stats[1];
        out[stat.name] = shortName(top.athlete) + ' ' + yards + ' YDS';
      });
      byTeam[id] = out;
    });
    return byTeam;
  }

  // ---------- Per-sport detail lists ----------

  function baseballDetails(entry, comp) {
    var state = entry.event.status.type.state;
    var away = findSide(comp.competitors, 'away');
    var home = findSide(comp.competitors, 'home');
    var results = [];

    if (state === 'post') {
      var summary = getCachedSummary(entry);
      if (summary) {
        var dec = extractPitchingDecisions(summary);
        if (dec.win) results.push('WP: ' + dec.win);
        if (dec.loss) results.push('LP: ' + dec.loss);
        if (dec.save) results.push('SV: ' + dec.save);
      }
    }

    if (state === 'in' && comp.situation) {
      var sit = comp.situation;
      var parts = [];
      if (sit.pitcher && sit.pitcher.athlete) parts.push('P: ' + shortName(sit.pitcher.athlete));
      if (sit.batter && sit.batter.athlete) parts.push('AB: ' + shortName(sit.batter.athlete));
      if (parts.length) results.push(parts.join('   '));
    }

    var topHitter = topLeaderAcrossTeams(comp.competitors, 'avg');
    if (topHitter) results.push(shortName(topHitter.athlete) + ': ' + topHitter.displayValue);

    var awaySP = away.probables && away.probables[0] && away.probables[0].athlete;
    var homeSP = home.probables && home.probables[0] && home.probables[0].athlete;
    if (awaySP) results.push('SP ' + away.team.abbreviation + ': ' + shortName(awaySP));
    if (homeSP) results.push('SP ' + home.team.abbreviation + ': ' + shortName(homeSP));

    return results;
  }

  function basketballDetails(entry, comp) {
    if (entry.event.status.type.state === 'pre') return [];

    var pts = topLeaderAcrossTeams(comp.competitors, 'points');
    var reb = topLeaderAcrossTeams(comp.competitors, 'rebounds');
    var ast = topLeaderAcrossTeams(comp.competitors, 'assists');
    if (!pts) return [];

    var results = [];
    var line = shortName(pts.athlete) + ' ' + pts.displayValue + ' PTS';
    var extras = [];
    if (reb && reb.athlete.id === pts.athlete.id && reb.value >= 10) extras.push(reb.displayValue + ' REB');
    if (ast && ast.athlete.id === pts.athlete.id && ast.value >= 8) extras.push(ast.displayValue + ' AST');
    if (extras.length) line += ', ' + extras.join(', ');
    results.push(line);

    if (reb && reb.athlete.id !== pts.athlete.id && reb.value >= 10) {
      results.push(shortName(reb.athlete) + ' ' + reb.displayValue + ' REB');
    }
    if (ast && ast.athlete.id !== pts.athlete.id && ast.value >= 8) {
      results.push(shortName(ast.athlete) + ' ' + ast.displayValue + ' AST');
    }
    return results;
  }

  function hockeyDetails(entry, comp) {
    if (entry.event.status.type.state === 'pre') return [];
    var top = topLeaderAcrossTeams(comp.competitors, 'goals');
    return top ? [shortName(top.athlete) + ' ' + top.displayValue + ' G'] : [];
  }

  function footballDetails(entry, comp) {
    var state = entry.event.status.type.state;
    if (state === 'pre') return [];

    var away = findSide(comp.competitors, 'away');
    var home = findSide(comp.competitors, 'home');
    var summary = getCachedSummary(entry);

    if (summary) {
      var byTeam = extractFootballTeamLeaders(summary);
      var results = [];
      [away, home].forEach(function (team) {
        var stats = byTeam[team.team.id];
        if (!stats) return;
        var abbr = team.team.abbreviation;
        if (stats.passing) results.push(abbr + ' PASS: ' + stats.passing);
        if (stats.rushing) results.push(abbr + ' RUSH: ' + stats.rushing);
        if (stats.receiving) results.push(abbr + ' REC: ' + stats.receiving);
      });
      if (results.length) return results;
    }

    var fallback = [];
    ['passingYards', 'rushingYards', 'receivingYards'].forEach(function (name) {
      var cat = (comp.leaders || []).filter(function (l) { return l.name === name; })[0];
      var top = cat && cat.leaders && cat.leaders[0];
      if (top) fallback.push(cat.shortDisplayName + ': ' + shortName(top.athlete) + ' ' + top.displayValue);
    });
    return fallback;
  }

  function soccerDetails(entry, comp) {
    if (entry.event.status.type.state === 'pre') return [];
    var away = findSide(comp.competitors, 'away');
    var home = findSide(comp.competitors, 'home');
    var goals = (comp.details || []).filter(function (d) { return d.scoringPlay; });

    return goals.map(function (g) {
      var athlete = g.athletesInvolved && g.athletesInvolved[0];
      var name = athlete && (athlete.shortName || athlete.displayName);
      if (!name) return null;
      var clock = g.clock && g.clock.displayValue;
      var teamId = g.team && g.team.id;
      var abbr = teamId === away.team.id ? away.team.abbreviation : (teamId === home.team.id ? home.team.abbreviation : '');
      return (abbr ? abbr + ' ' : '') + 'Goal: ' + name + (clock ? ' ' + clock : '');
    }).filter(Boolean);
  }

  var DETAIL_BUILDERS = {
    baseball: baseballDetails,
    basketball: basketballDetails,
    hockey: hockeyDetails,
    football: footballDetails,
    soccer: soccerDetails
  };

  function computeDetails(entry) {
    if (entry.kind !== 'game') return [];
    if (entry.league.sport === 'fantasy') return [];
    try {
      var comp = entry.event.competitions && entry.event.competitions[0];
      if (!comp) return [];
      var build = DETAIL_BUILDERS[entry.league.sport];
      return build ? build(entry, comp) : [];
    } catch (e) {
      return [];
    }
  }

  // ---------- Rendering ----------

  function renderScoreLine(entry) {
    if (entry.kind === 'headline') return renderHeadlineScoreLine(entry);
    if (entry.league.sport === 'fantasy') return renderFantasyScoreLine(entry);
    return renderGameScoreLine(entry);
  }

  function renderHeadlineScoreLine(entry) {
    return (
      '<span class="bl-headline">' + escapeHtml(entry.text) + '</span>' +
      '<span class="bl-status">' + escapeHtml(entry.source.toUpperCase()) + '</span>'
    );
  }

  function renderFantasyScoreLine(entry) {
    var t = entry.fantasy;
    return (
      '<span class="bl-status bl-status--rank">' + t.rank + ordinalSuffix(t.rank) + '</span>' +
      '<span class="bl-team">' + escapeHtml(t.teamName) + '</span>' +
      '<span class="bl-score">' + escapeHtml(String(t.points)) + ' PTS</span>'
    );
  }

  function renderGameScoreLine(entry) {
    var ev = entry.event;
    var comp = ev.competitions && ev.competitions[0];
    if (!comp) return '';

    var away = findSide(comp.competitors, 'away');
    var home = findSide(comp.competitors, 'home');
    if (!away || !home) return '';

    var state = ev.status && ev.status.type ? ev.status.type.state : 'pre';
    var shortDetail = ev.status && ev.status.type ? ev.status.type.shortDetail : '';

    var awayAbbr = away.team.shortDisplayName || away.team.name || away.team.abbreviation;
    var homeAbbr = home.team.shortDisplayName || home.team.name || home.team.abbreviation;

    if (state === 'pre') {
      return (
        '<span class="bl-team">' + awayAbbr + '</span>' +
        '<span class="bl-at">@</span>' +
        '<span class="bl-team">' + homeAbbr + '</span>' +
        '<span class="bl-status">' + localTime(ev.date) + '</span>'
      );
    }

    var awayWin = !!away.winner;
    var homeWin = !!home.winner;
    var matchupHtml =
      '<span class="bl-team' + (awayWin ? ' winner' : '') + '">' + awayAbbr + '</span>' +
      '<span class="bl-score' + (awayWin ? ' winner' : '') + '">' + (away.score || '0') + '</span>' +
      '<span class="bl-team' + (homeWin ? ' winner' : '') + '">' + homeAbbr + '</span>' +
      '<span class="bl-score' + (homeWin ? ' winner' : '') + '">' + (home.score || '0') + '</span>';

    var statusHtml = state === 'in'
      ? '<span class="bl-status live">' + shortDetail.toUpperCase() + '</span>'
      : '<span class="bl-status">' + (shortDetail || 'FINAL').toUpperCase() + '</span>';

    return matchupHtml + statusHtml;
  }

  function renderDetailSlot(text) {
    var slot = $('blDetailSlot');
    slot.innerHTML = text ? '<span class="bl-detail">' + escapeHtml(text) + '</span>' : '';
  }

  function updateBadge(entry) {
    var label = !entry ? 'ESPN' : (entry.kind === 'headline' ? 'NEWS' : entry.league.label);
    if (label === currentBadgeLeague) return;
    currentBadgeLeague = label;
    $('blBadgeText').textContent = label;
  }

  // ---------- Playback ----------

  var currentDetails = [];
  var currentDetailIndex = 0;
  var lastGameLeague = null;

  function goToEntry(index, startDetailIndex) {
    var card = $('blCard');
    var scoreLine = $('blScoreLine');
    currentIndex = index;
    var entry = entries[currentIndex];

    if (!entry) {
      scoreLine.innerHTML = '<span class="bl-empty">No games to show right now.</span>';
      renderDetailSlot('');
      currentDetails = [];
      currentDetailIndex = 0;
      card.classList.remove('bl-card--headline');
      updateBadge(null);
      persistPosition();
      return;
    }

    if (entry.kind === 'game') lastGameLeague = entry.league.label;

    scoreLine.innerHTML = renderScoreLine(entry);
    card.classList.toggle('bl-card--headline', entry.kind === 'headline');
    updateBadge(entry);

    currentDetails = computeDetails(entry);
    currentDetailIndex = Math.min(startDetailIndex || 0, Math.max(0, currentDetails.length - 1));
    renderDetailSlot(currentDetails[currentDetailIndex]);

    ensureSummary(entry);
    var next = entries[(currentIndex + 1) % entries.length];
    if (next) ensureSummary(next);

    persistPosition();
  }

  function animateToEntry(index) {
    var card = $('blCard');
    card.classList.remove('slide-in');
    void card.offsetWidth;
    card.classList.add('slide-out');

    setTimeout(function () {
      goToEntry(index);
      card.classList.remove('slide-out');
      void card.offsetWidth;
      card.classList.add('slide-in');
    }, FLIP_ANIM_MS);
  }

  function animateDetailStep() {
    var slot = $('blDetailSlot');
    slot.classList.remove('slide-in');
    void slot.offsetWidth;
    slot.classList.add('slide-out');

    setTimeout(function () {
      currentDetailIndex++;
      renderDetailSlot(currentDetails[currentDetailIndex]);
      slot.classList.remove('slide-out');
      void slot.offsetWidth;
      slot.classList.add('slide-in');
      persistPosition();
    }, FLIP_ANIM_MS);
  }

  function leaguesWithGames() {
    var seen = {};
    var result = [];
    gameList.forEach(function (g) {
      if (!seen[g.league.label]) {
        seen[g.league.label] = true;
        result.push(g.league.label);
      }
    });
    if (headlineList.length) result.push('NEWS');
    return result;
  }

  function orderedLeagueNames(nextLabel) {
    var names = leaguesWithGames();
    var idx = names.indexOf(nextLabel);
    if (idx <= 0) return names;
    return names.slice(idx).concat(names.slice(0, idx));
  }

  function playLeagueBumper(nextIndex, isIntro) {
    var next = entries[nextIndex];
    var nextLabel = next && next.kind === 'game' ? next.league.label : null;
    var names = nextLabel ? orderedLeagueNames(nextLabel) : leaguesWithGames();

    if (!names.length) {
      if (isIntro) { goToEntry(nextIndex); } else { animateToEntry(nextIndex); }
      return;
    }

    var bumper = $('blBumper');
    var list = $('blBumperList');
    list.innerHTML = names.map(function (n) { return '<span>' + escapeHtml(n) + '</span>'; }).join('');

    bumper.classList.add('active');

    setTimeout(function () {
      goToEntry(nextIndex);
      bumper.classList.remove('active');
    }, BUMPER_EXPAND_MS + BUMPER_HOLD_MS);
  }

  function tick() {
    if (!entries.length) return;
    if (currentDetailIndex < currentDetails.length - 1) {
      animateDetailStep();
      return;
    }
    if (entries.length <= 1) return;

    var nextIndex = (currentIndex + 1) % entries.length;
    var next = entries[nextIndex];
    var isLeagueSwitch = next && next.kind === 'game' &&
      lastGameLeague !== null && next.league.label !== lastGameLeague;

    if (isLeagueSwitch) {
      playLeagueBumper(nextIndex);
    } else {
      animateToEntry(nextIndex);
    }
  }

  function sortEntries(a, b) {
    var la = LEAGUES.indexOf(a.league);
    var lb = LEAGUES.indexOf(b.league);
    if (la !== lb) return la - lb;
    if (a.league.sport === 'fantasy') return 0; // already rank-sorted; Array.sort is stable
    return new Date(a.event.date) - new Date(b.event.date);
  }

  // Headlines only ever get inserted at a boundary between two different leagues -- never in
  // the middle of one league's own run (e.g. never partway through the FTSY standings).
  function buildPlaylist(games, headlines) {
    if (!headlines.length) return games.slice();
    if (!games.length) return headlines.slice();

    var boundaries = [];
    for (var i = 0; i < games.length - 1; i++) {
      if (games[i].league.label !== games[i + 1].league.label) boundaries.push(i);
    }
    boundaries.push(games.length - 1); // always leave at least one slot, even with a single league

    var placeCount = Math.min(headlines.length, boundaries.length);
    var step = boundaries.length / placeCount;
    var chosen = [];
    for (var h = 0; h < placeCount; h++) {
      chosen.push(boundaries[Math.floor(h * step)]);
    }

    var result = [];
    var hi = 0;
    var ci = 0;
    for (var gi = 0; gi < games.length; gi++) {
      result.push(games[gi]);
      if (ci < chosen.length && chosen[ci] === gi) {
        result.push(headlines[hi++]);
        ci++;
      }
    }
    while (hi < headlines.length) result.push(headlines[hi++]);

    return result;
  }

  var introPlayed = false;

  function rebuildPlaylist() {
    entries = buildPlaylist(gameList, headlineList);
    if (currentIndex >= entries.length) currentIndex = 0;

    if (!gameList.length) return;

    if (!introPlayed) {
      introPlayed = true;
      playLeagueBumper(currentIndex, true);
      return;
    }

    goToEntry(currentIndex);
  }

  function loadScores() {
    Promise.all(LEAGUES.map(fetchLeague)).then(function (results) {
      gameList = [].concat.apply([], results);
      gameList.sort(sortEntries);
      persistState({ gameList: gameList, gameListFetchedAt: Date.now() });
      rebuildPlaylist();
    });
  }

  function loadHeadlines() {
    fetchHeadlines().then(function (results) {
      headlineList = results;
      persistState({ headlineList: headlineList, headlineListFetchedAt: Date.now() });
      rebuildPlaylist();
    });
  }

  // Resume from where the last page left off (skipping the intro bumper and any refetch that
  // isn't actually due yet) instead of restarting cold on every navigation.
  function boot(saved) {
    var now = Date.now();

    if (saved && Array.isArray(saved.leagues) && saved.leagues.length === LEAGUES.length) {
      LEAGUES = saved.leagues;
    } else {
      for (var si = LEAGUES.length - 1; si > 0; si--) {
        var sj = Math.floor(Math.random() * (si + 1));
        var tmp = LEAGUES[si];
        LEAGUES[si] = LEAGUES[sj];
        LEAGUES[sj] = tmp;
      }
    }
    persisted.leagues = LEAGUES;

    var gamesFresh = !!(saved && Array.isArray(saved.gameList) && saved.gameListFetchedAt &&
      (now - saved.gameListFetchedAt < SCORES_REFRESH_MS));
    var headlinesFresh = !!(saved && Array.isArray(saved.headlineList) && saved.headlineListFetchedAt &&
      (now - saved.headlineListFetchedAt < NEWS_REFRESH_MS));

    if (saved && saved.introPlayed) {
      introPlayed = true;
      lastGameLeague = saved.lastGameLeague || null;
    }

    if (saved && saved.hidden) {
      persisted.hidden = true;
      setBarHidden(true);
    }

    if (gamesFresh) {
      gameList = saved.gameList;
      persisted.gameList = gameList;
      persisted.gameListFetchedAt = saved.gameListFetchedAt;
      if (headlinesFresh) {
        headlineList = saved.headlineList;
        persisted.headlineList = headlineList;
        persisted.headlineListFetchedAt = saved.headlineListFetchedAt;
      }
    }

    // Only skip straight to a resumed frame (no bumper, no "Loading...") if the intro already
    // played in this session AND we have game data fresh enough to trust without refetching.
    var resumed = gamesFresh && introPlayed;
    if (resumed) {
      entries = buildPlaylist(gameList, headlineList);
      var resumeIndex = (saved && typeof saved.currentIndex === 'number') ? saved.currentIndex : 0;
      if (resumeIndex >= entries.length) resumeIndex = 0;
      goToEntry(resumeIndex, saved ? saved.currentDetailIndex : 0);
    }

    if (!resumed) loadScores();
    if (!headlinesFresh) loadHeadlines();

    setInterval(loadScores, SCORES_REFRESH_MS);
    setInterval(loadHeadlines, NEWS_REFRESH_MS);
    setInterval(tick, DETAIL_MS);
  }

  try {
    chrome.storage.session.get([STORAGE_KEY], function (result) {
      var saved = (!chrome.runtime.lastError && result) ? result[STORAGE_KEY] : null;
      boot(saved || null);
    });
  } catch (e) {
    boot(null);
  }
})();
