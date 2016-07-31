var player;
var playerDirection = "down";
var backgroundMapImage;

var latitude, longitude;

function preload() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onCurrentPositionGotten);
  }
  else {
    alert("Your browser does not support geolocation : /");
  }
};

function setup() {
  var w = min(windowWidth, 600);
  var h = min(windowHeight, 600);
  createCanvas(w, h);
  text("loading...", 0, 20);

  createPlayer();
}

function draw() {
  clear();
  if(backgroundMapImage !== undefined) {
    image(backgroundMapImage, 0, 0);
  }

  walkPlayer();

  drawSprites();
}
