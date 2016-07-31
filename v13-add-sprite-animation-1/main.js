var KEY_W = 87;
var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;

var player;
var backgroundMapImage;

function preload() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onCurrentPositionGotten);
  }
  else {
    alert("Your browser does not support geolocation : /");
  }
};

function onCurrentPositionGotten(position) {
  var latitude = 40.753660;  // position.coords.latitude;
  var longitude = -73.983290 // position.coords.longitude;

  var baseUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE"
  var sizeParam = "&size=600x600";
  var centerParam = "&center=" + latitude + "," + longitude;
  var zoomParam = "&zoom=17";

  var fullUrl = baseUrl + sizeParam + centerParam + zoomParam;

  var pokemonObject = {
    "http://i.imgur.com/4CNJyMd.png": "40th street and Avenue of Americas",
    "http://i.imgur.com/JAJeqZS.png": "40th street and 5th Avenue",
    "http://i.imgur.com/Fe0smJE.png": "42nd street and 5th Avenue"
  }

  $.each(pokemonObject, function(pokemonImageUrl, address) {
    var encodedAddress = encodeURIComponent(address);
    var markersParam = "&markers=icon:" + pokemonImageUrl + "%7Cshadow:true%7C" + encodedAddress;
    fullUrl = fullUrl + markersParam;
  });

  console.log(fullUrl);

  loadImage(fullUrl, onLoadedImage);
}

function onLoadedImage(img) {
  backgroundMapImage = img;
}

function setup() {
  createCanvas(600, 600);
  text("loading...", 0, 20);

  player = createSprite(width/2, height/2);
  
  player.addAnimation("down-walk", "imgs/1a.png", "imgs/1b.png", "imgs/1c.png", "imgs/1d.png");
  player.addAnimation("right-walk", "imgs/2a.png", "imgs/2b.png", "imgs/2c.png", "imgs/2d.png");
  player.addAnimation("up-walk", "imgs/3a.png", "imgs/3b.png", "imgs/3c.png", "imgs/3d.png");
  player.addAnimation("left-walk", "imgs/4a.png", "imgs/4b.png", "imgs/4c.png", "imgs/4d.png");
  player.addAnimation("stop", "imgs/1a.png");
}

function draw() {
  clear();
  if(backgroundMapImage !== undefined) {
    image(backgroundMapImage, 0, 0);
  }

  if (keyDown("w")) {
    player.position.y -= 3;
    player.changeAnimation("up-walk");
  }
  if (keyDown("a")) {
    player.position.x -= 3;
    player.changeAnimation("left-walk");
  }
  if (keyDown("s")) {
    player.position.y += 3;
    player.changeAnimation("down-walk");
  }
  if (keyDown("d")) {
    player.position.x += 3;
    player.changeAnimation("right-walk");
  }

  if (keyDown("w") === false && keyDown("a") === false && keyDown("s") === false && keyDown("d") === false) {
    player.changeAnimation("stop");w
  }

  drawSprites();
}
