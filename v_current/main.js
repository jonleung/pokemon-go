var mapImage;

function preload() {
  // var address = prompt("What address would you like to center the map at?");
  var address = "243 Crosshill Road wynnewood pa 19096"
  var encodedAddress = encodeURIComponent(address); // converts the string to valid URL characters
                                                    // for example the space character becomes %20
  var mapUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE&size=300x150&center=" + encodedAddress;
  mapImage = loadImage(mapUrl);
}

function setup() {
  createCanvas(400, 200);
  background(240, 240, 240);
  image(mapImage, 0, 0);
}
