function onCurrentPositionGotten(position) {
  var latitude = 40.753660;  // position.coords.latitude;
  var longitude = -73.983290 // position.coords.longitude;

  var baseUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE"
  var sizeParam = "&size=600x600";
  var centerParam = "&center=" + latitude + "," + longitude;
  var zoomParam = "&zoom=17";

  var fullUrl = baseUrl + sizeParam + centerParam + zoomParam;

  console.log(fullUrl);

  loadImage(fullUrl, onBackgroundMapImageLoaded);
}

function onBackgroundMapImageLoaded(img) {
  backgroundMapImage = img;
}
