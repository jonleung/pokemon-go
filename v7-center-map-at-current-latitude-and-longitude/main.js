// It will be helpful for the students to use the Chrome debugger to step
// through the code line by line.

// I've left in `debugger` statements inside each function that can be commented
// out.

function preload() {
  // debugger
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onCurrentPositionGotten);
  }
  else {
    alert("Your browser does not support geolocation : /");
  }
};

function onCurrentPositionGotten(position) {
  // debugger
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var baseUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE"
  var sizeParam = "&size=600x600";
  var centerParam = "&center=" + latitude + "," + longitude;
  var zoomParam = "&zoom=18";

  var fullUrl = baseUrl + sizeParam + centerParam + zoomParam;
  console.log(fullUrl);

  loadImage(fullUrl, onLoadedImage);
}

function onLoadedImage(img) {
  // debugger
  image(img, 0, 0);
}


function setup() {
  // debugger
  createCanvas(600, 600);
  text("loading...", 0, 20);
}
