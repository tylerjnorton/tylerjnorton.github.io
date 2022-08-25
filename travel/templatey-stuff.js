mapboxgl.accessToken =
  "pk.eyJ1IjoidHlsZXJqbm9ydG9uIiwiYSI6ImNpdmUxYnR6bTAxOGUyb3AzeWI0ZzJ5bHkifQ.SWoo70ZhudEwqzzScdzETA";

const data = {
  rotterdam: {
    title: "Rotterdam, Netherlands",
    year: "2022",
    lat: 51.9,
    lon: 4.5,
    next: "Manchester // 2023",
    prev: "Montral // 2024",
    images: [
      "rotterdam1.jpg",
      "rotterdam1.jpg",
      "rotterdam1.jpg",
      "rotterdam1.jpg",
    ],
    content:
      "<p>At the end of 2018&rsquo;s travels, a few English friends and I stayed in Rotterdam for a week&rsquo;s vacation before I headed back to the states. We stayed at Weena, right next to the train station and really close to everything else the city has to offer.</p><p>Our first night was a few quiet drinks at Bierlokaal Locus Publicus. It is an awesome little brewhouse with great beers from the area as well as some traditional local snacks to keep you going through the night. Perfect atmosphere inside as well for dimly lit intimate surroundings. Everyone speaks English so well that one of my friends asked &ldquo;where are you from&rdquo; expecting a city in England and the response was &ldquo;from here&rdquo;.</p><p>We hit all the normal touristy things and ate at the Markthal downtown, saw the cube homes, and took a trip up the Euromast. All highly recommended but also well covered by other travel publications. I&rsquo;d rather talk about the all chicken themed place we stopped for dinner and drinks called Scharrels en Schuim. A narrow bar/restaurant with full wall windows, a great menu of both beer and chicken, and an upstairs with live music a few nights a week (usually jazz).</p><p>It wasn&rsquo;t all late night eats though, we got up for some waffles (pictured above) from a shockingly good vegan place called Backyard. It was probably the best waffle I&rsquo;ve ever had, not that I&rsquo;m an expert. We also took the tram to the other side of the river for a tour of Stadion Feyenoord. Sadly, Dirk Kuyt was not there. Pair that with a few 30 minute train rides for the big days and nights in Amsterdam and you&rsquo;ve got quite the nice time in the Netherlands.</p>",
  },
  manchester: {
    title: "Manchester",
    year: "2023",
    lat: 42.9,
    lon: -71.4,
    next: "Montreal // 2024",
    prev: "Rotterdam // 2022",
    images: [
      "rotterdam1.jpg",
      "rotterdam1.jpg",
      "rotterdam1.jpg",
      "rotterdam1.jpg",
    ],
    content: "Here is the writing for Manch Vegas.",
  },
  montreal: {
    title: "Montreal",
    year: "2024",
    lat: 45.5,
    lon: -73.5,
    next: "Rotterdam // 2022",
    prev: "Manchester // 2023",
    images: [
      "rotterdam1.jpg",
      "rotterdam1.jpg",
      "rotterdam1.jpg",
      "rotterdam1.jpg",
    ],
    content: "Here is the writing for Montreal.",
  },
};

let selected = window.location.hash.replace(/^#/, "") || Object.keys(data)[0];
let place = data[selected];

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("nav").style.opacity = "1";
  document.getElementById("nav").style.pointerEvents = "all"; // When open, we want the click events
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("nav").style.opacity = "0";
  document.getElementById("nav").style.pointerEvents = "none"; // when closed, no more click events
}

document.querySelector(".list").addEventListener("click", (event) => {
  const value = event.target.getAttribute("data-place");
  if (value) {
    closeNav();
    switchToLocation(value);
  }
});

const div = document.querySelector("#rendered-content-area");
const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/tylerjnorton/ckinz59qz2ike18mr42gnbaya", // style URL
  center: [data[selected].lon, data[selected].lat], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
map.scrollZoom.disable();
map.dragPan.disable();

function switchToLocation(key) {
  selected = key;
  place = data[key];

  // add fade out class
  leftDiv.classList.add("fadedOut");

  // wait for fade out to finish
  setTimeout(() => {
    // pan to new map location
    map.flyTo({ center: [place.lon, place.lat], zoom: 9 });

    // wait for pan
    setTimeout(() => {
      // render new content
      leftDiv.classList.remove("fadedOut");
      render();
    }, 1500);
  }, 500);
}

let leftDiv = document.querySelector('.left');
function render() {
  console.log("Rendering", selected);

  // execute the template and set it as the content for the rendered-content-area div
  div.innerHTML = template(place);
  leftDiv = document.querySelector('.left');

  document.querySelectorAll(".pagerButton").forEach((node) => {
    node.addEventListener("click", () => {
      selected = node.getAttribute("href").replace(/^#/, "");
      switchToLocation(selected);
    });
  });
}

render();

// compile the template
function template(place) {
  const keys = Object.keys(data);

  const currentIndex = keys.indexOf(selected);

  // prev is either the one before the current or loop around to the end of the list and take the last item.
  const prevIndex = keys[currentIndex - 1] ? currentIndex - 1 : keys.length - 1;

  const nextIndex = keys[currentIndex + 1] ? currentIndex + 1 : 0;

  const prev = data[keys[prevIndex]];
  const next = data[keys[nextIndex]];

  return `
    <div class="imageshow1"><img src="images/${place.images[0]}" /></div>
    <div class="imageshow2"><img src="images/${place.images[1]}" /></div>
    <div class="imageshow3"><img src="images/${place.images[2]}" /></div>
    <div class="imageshow4"><img src="images/${place.images[3]}" /></div>
    <div class="left">
        <div class="logo"><img src="./images/logo.svg" /></div>
        <div id="year"><span>${place.year}</span></div>
        <div id="title"><span>${place.title}</span></div>
        <div id="writing">${place.content}</div>
        <div id="botnav">
            <p class="prev"><a class="pagerButton" href="#${keys[prevIndex]}">${prev.title} // ${prev.year}</a></p>
            <p class="next"><a class="pagerButton" href="#${keys[nextIndex]}">${next.title} // ${next.year}</a></p>
        </div>
    </div>
 `;
}
