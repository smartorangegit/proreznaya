$(function() {
    filterMarkers = function (category) {
        for (i = 0; i < markers1.length; i++) {
            marker = gmarkers1[i];
            var markerMain = gmarkers1.find(item => item.category === 'main');

            if (marker.category == category || category == 'all') {
                marker.setMap(map);
                markerMain.setMap(map);
            }
            else {
                marker.setMap(null);
                markerMain.setMap(map);
            }
        }
    }
    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });

    markers1 = [
            ['0', '', 50.5538, 30.2716, 'main', '/img/contacts.png', '<div class="mapinfo">Terracotta</div>',  100 ],
            ['1', '', 50.543760, 30.269480, 'medicine', '/img/location/png/shapes.png', 'Ирпенский военный госпиталь', 0],
            ['2', '', 50.550314, 30.234300, 'bank', '/img/location/png/money.png', 'Ощадбанк', 75],
            ['3', '', 50.570040, 30.265117, 'school', '/img/location/png/school-1.png', 'Школа № 13', 75],
            ['4', '', 50.552443, 30.231382, 'garden', '/img/location/png/bear.png', 'ДНЗ "Пролісок"', 75],
            ['5', '', 50.558271, 30.296104, 'garden', '/img/location/png/bear.png', 'ДНЗ "КАЗКА"', 75],
            ['6', '', 50.555467, 30.256519, 'food', '/img/location/png/dish.png', 'Ресторан "Рим" ', 75],
            ['7', '', 50.554218, 30.293686, 'market', '/img/location/png/supermarket.png', 'АТБ', 75],
            ['8', '', 50.555308, 30.238763, 'school', '/img/location/png/school-1.png', 'Школа №2', 75],
            ['9', '', 50.538138, 30.260736, 'school', '/img/location/png/school-1.png', 'Школа №3', 75],
        ];

    function addMarker(marker) {
        var category = marker[4];
        var title = marker[1];
        var pos = new google.maps.LatLng(marker[2], marker[3]);
        var content = marker[6];
        var markerIcon = {
            url : marker[5],
            anchor: new google.maps.Point(0, marker[7]),
            // последнее значение в массиве отвечает за смещение иконки маркера
            // относительно обїекта в связи с тем, что острие иконки не по центру
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
    var map = new google.maps.Map($('#infra-map')[0], {
        zoom: 13,
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
