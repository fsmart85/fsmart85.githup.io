$(function () {
    function initMap() {
        var centerLatLng = new google.maps.LatLng(41.2257571, 69.2195855);
        var mapOptions = {
            center: centerLatLng,
            zoom: 14
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // Добавляем маркер
        var marker = new google.maps.Marker({
            position: centerLatLng,
            map: map,
            title: "Gold Star Omega"
        });
    }
    google.maps.event.addDomListener(window, "load", initMap);
});
