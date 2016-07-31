if (navigator.geolocation) {
  // user has geolocation
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var msg = "You are located at\n" +
              "Latitude: " + latitude + "\n" +
              "Longitude: " + longitude;

    alert(msg);
  });
}
else {
  alert("Your browser does not support geolocation : /");
}
