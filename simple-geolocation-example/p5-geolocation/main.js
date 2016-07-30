var mapImage;

function preload() {

  if(geoCheck()) {
    // user has geolocation

    getCurrentPosition(function(currentPosition) {
      latitude = currentPosition.latitude; // 40.753660;
      longitude = currentPosition.longitude; // -73.983290;

      var msg = "You are located at\n" +
                "Latitude: " + latitude + "\n" +
                "Longitude: " + longitude;

      alert(msg);
    });
  }
  else {
    alert("Your browser does not support geolocation : /");
  }

}
