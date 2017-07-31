angular.module('stocks').service('brokerService', function($q) {
    //Pulled from Angular Google Maps Git and modified with mapstyle
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(32.777528, -96.795189),
            zoom: 15,
            disableDefaultUI: true,
            styles: [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#242f3e"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#746855"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#242f3e"
                }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#d59563"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#d59563"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#263c3f"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#6b9a76"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#38414e"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#212a37"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9ca5b3"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#746855"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#1f2835"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#f3d19c"
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#2f3948"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#d59563"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#17263c"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#515c6d"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#17263c"
                }
                ]
            }
            ],    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
    
    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP,
            zoom: 20
        });
        this.map.setCenter(res.geometry.location);
    }
    
});




