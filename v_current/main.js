var mapImage;

function preload() {
  var address = prompt("What address would you like to center the map at?");
  var encodedAddress = encodeURIComponent(address); // converts the string to valid URL characters
                                                    // for example the space character (" ") becomes "%20"
  mapImage = loadImage("http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE&size=300x150&center=" + encodedAddress);
}

function setup() {
  createCanvas(400, 200);
  background(240, 240, 240);
  image(mapImage, 0, 0);
}
