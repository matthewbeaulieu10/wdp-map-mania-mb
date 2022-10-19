function letMeKnowImWorking () {
    console.log("working!")
}

var actualMap;

function initMap() {
    actualMap = new google.maps.Map(document.getElementById("mapDiv"), {
        center: {lat:0,lng:0},
        zoom:2,
    });

    var homeMarker = new google.maps.Marker({position:{lat:41.970760,lng:-88.351590},map:actualMap});
}