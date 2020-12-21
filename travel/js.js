mapboxgl.accessToken = 'pk.eyJ1IjoidHlsZXJqbm9ydG9uIiwiYSI6ImNpdmUxYnR6bTAxOGUyb3AzeWI0ZzJ5bHkifQ.SWoo70ZhudEwqzzScdzETA';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/tylerjnorton/ckinzcvmx05bn17jy0bz0jqzk', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
map.scrollZoom.disable();

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("nav").style.opacity = "1";
    document.getElementById("nav").style.zIndex = "50";
    document.getElementById("nav").style.display = "block";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("nav").style.opacity = "0";
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav").style.zIndex = "0";
  }