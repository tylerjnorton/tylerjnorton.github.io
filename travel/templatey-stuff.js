const data = {
  rotterdam: {
    place: "rotterdam",
    stuff: {
      title: "Rotterdam, Netherlands",
      year: "2022",
      lat: "42.3",
      lon: "-71.1",
      next: "Manchester // 2023",
      prev: "Montral // 2024",
      images: ["rotterdam1.jpg", "rotterdam1.jpg", "rotterdam1.jpg", "rotterdam1.jpg"],
      content: "<p>At the end of 2018&rsquo;s travels, a few English friends and I stayed in Rotterdam for a week&rsquo;s vacation before I headed back to the states. We stayed at Weena, right next to the train station and really close to everything else the city has to offer.</p><p>Our first night was a few quiet drinks at Bierlokaal Locus Publicus. It is an awesome little brewhouse with great beers from the area as well as some traditional local snacks to keep you going through the night. Perfect atmosphere inside as well for dimly lit intimate surroundings. Everyone speaks English so well that one of my friends asked &ldquo;where are you from&rdquo; expecting a city in England and the response was &ldquo;from here&rdquo;.</p><p>We hit all the normal touristy things and ate at the Markthal downtown, saw the cube homes, and took a trip up the Euromast. All highly recommended but also well covered by other travel publications. I&rsquo;d rather talk about the all chicken themed place we stopped for dinner and drinks called Scharrels en Schuim. A narrow bar/restaurant with full wall windows, a great menu of both beer and chicken, and an upstairs with live music a few nights a week (usually jazz).</p><p>It wasn&rsquo;t all late night eats though, we got up for some waffles (pictured above) from a shockingly good vegan place called Backyard. It was probably the best waffle I&rsquo;ve ever had, not that I&rsquo;m an expert. We also took the tram to the other side of the river for a tour of Stadion Feyenoord. Sadly, Dirk Kuyt was not there. Pair that with a few 30 minute train rides for the big days and nights in Amsterdam and you&rsquo;ve got quite the nice time in the Netherlands.</p>",
    },
  },
  manchester: {
    place: "manchester",
    stuff: {
      title: "Manchester",
      year: "2023",
      lat: "42.3",
      lon: "-71.1",
      next: "Montreal // 2024",
      prev: "Rotterdam // 2022",
      images: ["rotterdam1.jpg", "rotterdam1.jpg", "rotterdam1.jpg", "rotterdam1.jpg"],
      content: "Here is the writing for Manch Vegas.",
    },
  },
  montreal: {
    place: "montreal",
    stuff: {
      title: "Montreal",
      year: "2024",
      lat: "42.3",
      lon: "-71.1",
      next: "Rotterdam // 2022",
      prev: "Manchester // 2023",
      images: ["rotterdam1.jpg", "rotterdam1.jpg", "rotterdam1.jpg", "rotterdam1.jpg"],
      content: "Here is the writing for Montreal.",
    },
  },
};

// compile the template
function template(place) {
  return `
    <div class="imageshow1"><img src="images/${place.stuff.images[0]}" /></div>
    <div class="imageshow2"><img src="images/${place.stuff.images[1]}" /></div>
    <div class="imageshow3"><img src="images/${place.stuff.images[2]}" /></div>
    <div class="imageshow4"><img src="images/${place.stuff.images[3]}" /></div>
    <div class="left">
        <div class="logo"><img src="./images/logo.svg" /></div>
        <div id="year"><span>${place.stuff.year}</span></div>
        <div id="title"><span>${place.stuff.title}</span></div>
        <div id="writing">${place.stuff.content}</div>
        <div id="botnav">
            <p class="prev"><a href="#">${place.stuff.prev}</a></p>
            <p class="next"><a href="#">${place.stuff.next}</a></p>
        </div>
    </div>
 `;
}

const div = document.querySelector("#rendered-content-area");

// execute the template and set it as the content for the rendered-content-area div
div.innerHTML = template(data.rotterdam);
