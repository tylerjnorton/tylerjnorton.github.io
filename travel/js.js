mapboxgl.accessToken = 'pk.eyJ1IjoidHlsZXJqbm9ydG9uIiwiYSI6ImNpdmUxYnR6bTAxOGUyb3AzeWI0ZzJ5bHkifQ.SWoo70ZhudEwqzzScdzETA';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/tylerjnorton/ckinz59qz2ike18mr42gnbaya', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
map.scrollZoom.disable();
map.dragPan.disable();

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("nav").style.opacity = "1";
    document.getElementById('nav').style.pointerEvents = 'all'; // When open, we want the click events
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("nav").style.opacity = "0";
    document.getElementById('nav').style.pointerEvents = 'none'; // when closed, no more click events
  }
  
