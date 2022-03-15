
var map;
let marker;
var geocoder;
var infowindow;

function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  }, function(responses, status) {
    var input = document.getElementById('autoComplement');
    if (responses && responses.length > 0) {
      // alert(responses[0].formatted_address)
      marker.formatted_address = responses[0].formatted_address;
      
      input.value = marker.formatted_address;
    } else {
      marker.formatted_address = 'Не може да се детектира името на локацијата. Поставете го сами';
      input.value = '';
    }
    infowindow.setContent(marker.formatted_address);
    infowindow.open(map, marker);
  });
}



function initMap(lat,lng) {
    
    var default_lat = 41.997345;
    var default_lng = 21.427996;

    if(lat && lng){
      default_lat=parseFloat(lat);
      default_lng=parseFloat(lng); 
      console.log(default_lat);
      console.log(default_lng); 
    }

 

    infowindow = new google.maps.InfoWindow({
      size: new google.maps.Size(150, 50)
    });

    geocoder = new google.maps.Geocoder();

    // Styles a map in night mode.
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: default_lat, lng: default_lng },
      zoom: 15,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });

    var lat = document.getElementById('address_lat');
    var lng = document.getElementById('address_lng');

    marker = new google.maps.Marker({
      map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {  lat: default_lat, lng: default_lng },
    });
    // marker.addListener("click", toggleBounce);
    google.maps.event.addListener(marker, 'dragend', function() {
      geocodePosition(marker.getPosition());  
      lat.value = marker.getPosition().lat();
      lng.value = marker.getPosition().lng();
    });
    

    var input = document.getElementById('autoComplement');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setComponentRestrictions({
      country: ["mkd"],
    });

    
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();
      map.panTo(place.geometry.location);
      marker.setPosition(place.geometry.location);
      infowindow.setContent(input.value);
      infowindow.open(map, marker);
    });

  }
  

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }


 