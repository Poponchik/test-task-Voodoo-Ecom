let latLng = { lat: 43.45094, lng: -80.513 }

const map_parameters = {
  center: {
    lat: 43.45094, lng: -80.513,
  }, zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP,

  styles: [
    {
      "featureType": "all",
      "stylers": [
        { "color": "#FCFAF6" }
      ]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "color": "#FFFFFF" }
      ]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#F3F3F3" }
      ]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        { "color": "#D7EFF9" }
      ]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        { "color": "#E0F1E5" }
      ]
    }, {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#C3C3C3" }
      ]
    }
  ]
};

const map = new google.maps.Map(document.getElementById('map'), map_parameters);
map.setOptions({ disableDefaultUI: true });

const marker = new google.maps.Marker({
  position: latLng,
  map,
  title: "Uluru (Ayers Rock)",
  icon: {
    url: "../public/images/352521_location_on_icon.svg",
  },
});


let popupString = '<div class="info-window"><h3 class="info-window__title">Voodoo</h3>' +
  '<p class="info-window__address">137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine</p>' +
  '<div class="info-window__phone"><img src="../public/images/phone.png"/><p>1-800-480-9597</p></div>' +
  '<div class="info-window__email"><img src="../public/images/mail.png"/><p>info@voodoo.com</p></div>' +
  '</div>';

const infowindow = new google.maps.InfoWindow({
  content: popupString,
  ariaLabel: "Uluru",
});

infowindow.setPosition(latLng);
infowindow.open(map);

infowindow.open({
  anchor: marker,
  map,
});


google.maps.event.addDomListener(window, "load", initMap);
