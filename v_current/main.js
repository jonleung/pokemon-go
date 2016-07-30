var mapImage;

function preload() {
  var address = prompt("What address would you like to center the map at?");
  var encodedAddress = encodeURIComponent(address); // converts the string to valid URL characters
                                                    // for example the space character (" ") becomes "%20"

  var baseUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE"
  var sizeParam = "&size=600x600";
  var centerParam = "&center=" + encodedAddress;
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
