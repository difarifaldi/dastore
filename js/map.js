let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -6.363036, lng: 106.827027 },
    zoom: 80,
  });
}