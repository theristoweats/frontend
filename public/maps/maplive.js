
var map2;
let marker2; 
var infowindow2;

var default_lat = 41.997345;
var default_lng = 21.427996;
  
function initMapTracking() {
    
  
    infowindow2 = new google.maps.InfoWindow({
      size: new google.maps.Size(100, 40)
    });
    // Styles a map in night mode.
    map2 = new google.maps.Map(document.getElementById("mapLiveTracking"), {
      center: { lat: default_lat, lng: default_lng },
      zoom: 15,
      styles:  [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8b9198"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#323336"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#414954"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2e2f31"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7a7c80"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#242427"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#202022"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#393a3f"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#202022"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#393a3f"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#202022"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#202124"
            }
        ]
    }
]
    });
    
    
    
    // var crosshair = "data:image/png;base64,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";
    
    // marker.addListener("click", toggleBounce);
       
    // infowindow2.setContent("Илија Ристов - 075 440 625");
    // infowindow2.open(map2, marker2);
  }

  function updateLocation(newLat, newLng){
    map2.panTo({lat: parseFloat(newLat), lng: parseFloat(newLng)});
    marker2.setPosition({lat: parseFloat(newLat), lng: parseFloat(newLng)});
  }

  function setCarrierDetails(details){
      
    infowindow2.setContent(details);
    infowindow2.open(map2, marker2);
  }

  function setMarkerCarrier(){
    const image =
        "https://firebasestorage.googleapis.com/v0/b/theristoweats-7c8f1.appspot.com/o/gps%20(4)%20(1)%20(1).png?alt=media&token=e859b9de-c638-4d0b-9181-d5e82008369b";
        
        marker2 = new google.maps.Marker({
        map:map2,
        animation: google.maps.Animation.DROP,
        position: {  lat: default_lat, lng: default_lng }, 

        icon : {
                url :  image,
                origin:  new google.maps.Point(0, -9),
                }
        });
  }

  function clearMarkerCarrier(){
      if(marker2){
          marker2.setMap(null);
          marker2 = [];
      }
  }