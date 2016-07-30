var mapImage;

function preload() {
  var latitude = 40.753660;
  var longitude = -73.983290;

  var baseUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE"
  var sizeParam = "&size=600x600";
  var centerParam = "&center=" + latitude + "," + longitude;
  var zoomParam = "&zoom=18";

  var fullUrl = baseUrl + sizeParam + centerParam + zoomParam;
  console.log(fullUrl);
  mapImage = loadImage(fullUrl);
}

function setup() {
  createCanvas(600, 600);
  background(240, 240, 240);
  image(mapImage, 0, 0);
}
