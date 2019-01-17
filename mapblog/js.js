mapboxgl.accessToken = 'pk.eyJ1IjoidHlsZXJqbm9ydG9uIiwiYSI6IjlkeUQyaGcifQ.4keYlqVzhizfaD__QC2aww';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tylerjnorton/cjr0kctg00nyg2sqrnpibqjaw',
    center: [-71.155,42.692],
    zoom: 8.5,
    bearing: 0,
    pitch: 25,
    // .dragging.disable() and other handler .disable() funtions in Leaflet.
    interactive: false
});

var chapters = {
    'Vegas Visit #1': {
        duration: 10000,
        center: [4.899,52.370],
        zoom: 13.5,
        bearing: 0,
        pitch: 20
    },
    'Rome, Italy': {
        duration: 6000,
        center: [-0.07571203, 51.51424049],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'Paris, France': {
        bearing: 90,
        center: [-0.08533793, 51.50438536],
        zoom: 13,
        speed: 0.6,
        pitch: 40
    },
    'Co. Donegal, Ireland': {
        bearing: 90,
        center: [0.05991101, 51.48752939],
        zoom: 12.3
    },
    'Venice, Italy': {
        bearing: 45,
        center: [-0.18335806, 51.49439521],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    'Milan, Italy': {
        bearing: 180,
        center: [-0.19684993, 51.5033856],
        zoom: 12.3
    },
    'Turning 29 in Vegas': {
        bearing: 90,
        center: [-0.10669358, 51.51433123],
        zoom: 17.3,
        pitch: 40
    },
    'Seville, Spain': {
        bearing: 90,
        center: [-0.12416858, 51.50779757],
        zoom: 14.3,
        pitch: 20
    },
    'Lisbon, Portugal': {
        bearing: 45,
        center: [-0.18335806, 51.49439521],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    'Florence, Italy': {
        duration: 6000,
        center: [-0.07571203, 51.51424049],
        bearing: 150,
        zoom: 15,
        pitch: 0
    }
};

// On every scroll event, check which element is on screen
// This could actually cause problems, generally its not ideal to run code on every scroll event
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = Object.keys(chapters)[0];
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

$(function() {
    var $features = $("#features");

    var data = {
      rss_url: "https://medium.com/feed/lets-move-mountains/",
      api_key: "2usdfjjeu0g7hlmoucajuxwfvnaaqidn9yi3a6oz",
      count: 50
    };
    $.get("https://api.rss2json.com/v1/api.json", data, function(response) {
      if (response.status == "ok") {
        response.items
          .sort(function(a, b) {
            // sort by the date
            return new Date(a.pubDate) > new Date(b.pubDate) ? 1 : -1;
          })
          .forEach(function(item) {
            var newSection = $(
              "<section id='" +
                item.title +
                "' ><h3>" +
                item.title +
                "</h3><p class='content' />" + item.content + "</section>"
            );
            $features.append(newSection);
  
            // Remove Mediums stupid bullshit
            newSection.find("p:contains('where people are continuing the conversation by highlighting and responding to this story')").remove();
  
            // Remove the hr
            newSection.find('hr').remove();
  
          });
      }
    });
  });
  
