function initMap(){
    var location= {lat:4.159302,lng:9.243536};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center: location
    });
}