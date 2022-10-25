function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markerCluster = new MarkerClusterer({
        map,
        markers
    });

    const locations = [{
            lat: 40.785091,
            lng: -73.9682856
        },
        {
            lat: 41.084045,
            lng: -73.874245
        },
        {
            lat: 40.754932,
            lng: -73.984016
        },
    ];

    const markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

}