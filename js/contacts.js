$(function() {

    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });

    markers1 = [
                ['0', '', 50.5538, 30.2716, 'main', '/img/contacts.png', '<div class="mapinfo">На Прорезной</div>'],
            ];

    function addMarker(marker) {
        var category = marker[4];
        var title = marker[1];
        var pos = new google.maps.LatLng(marker[2], marker[3]);
        var content = marker[6];
        var markerIcon = {
            url : marker[5],
            anchor: new google.maps.Point(0, 90),
        };

        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map,
            icon: markerIcon,
        });
        gmarkers1.push(marker1);
        // Marker click listener
        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker1);
                map.panTo(this.getPosition());
            }
        })(marker1, content));
    }
      // Create the map
    var map = new google.maps.Map($('#contacts-map')[0], {
        zoom: 14,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        // scrollwheel: false,
        fullscreenControl: false,
        center: new google.maps.LatLng(50.5538, 30.2716)
    });

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }




		$.getJSON("/js/mapStyle.json", function(data) {
	         map.setOptions({styles: data});
	     });

});
