var KEY_W = 87;
var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;

var player;
var playerDirection = "down";
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
  var w = min(windowWidth, 600);
  var h = min(windowHeight, 600);
  createCanvas(w, h);
  text("loading...", 0, 20);

  player = createSprite(width/2, height/2);

  player.addAnimation("down-walk", "imgs/1a.png", "imgs/1b.png", "imgs/1c.png", "imgs/1d.png").delayFrame = 6;
  player.addAnimation("right-walk", "imgs/2a.png", "imgs/2b.png", "imgs/2c.png", "imgs/2d.png").delayFrame = 6;
  player.addAnimation("up-walk", "imgs/3a.png", "imgs/3b.png", "imgs/3c.png", "imgs/3d.png").delayFrame = 6;
  player.addAnimation("left-walk", "imgs/4a.png", "imgs/4b.png", "imgs/4c.png", "imgs/4d.png").delayFrame = 6;

  player.addAnimation("down-stop", "imgs/1a.png");
  player.addAnimation("right-stop", "imgs/2a.png");
  player.addAnimation("up-stop", "imgs/3a.png");
  player.addAnimation("left-stop", "imgs/4a.png");
}

function moveUp(speed) {
  player.position.y -= speed;
  player.changeAnimation("up-walk");
  playerDirection = "up";
}

function  moveLeft(speed) {
  player.position.x -= speed;
  player.changeAnimation("left-walk");
  playerDirection = "left";
}

function moveDown(speed) {
  player.position.y += speed;
  player.changeAnimation("down-walk");
  playerDirection = "down";
}

function moveRight(speed) {
  player.position.x += speed;
  player.changeAnimation("right-walk");
  playerDirection = "right";
}

function draw() {
  clear();
  if(backgroundMapImage !== undefined) {
    image(backgroundMapImage, 0, 0);
  }

  if (keyDown("w")) {
    moveUp(3);
  }
  if (keyDown("a")) {
    moveLeft(3);
  }
  if (keyDown("s")) {
    moveDown(3);
  }
  if (keyDown("d")) {
    moveRight(3);
  }

  if(touchIsDown || mouseIsPressed) {
    if (mouseX < player.position.x) {
      moveLeft(2);
    }
    else if (mouseX > player.position.x) {
      moveRight(2);
    }
    if (mouseY < player.position.y) {
      moveUp(2);
    }
    else if (mouseY > player.position.y) {
      moveDown(2);
    }
  }

  console.log(touchX);

  if (keyDown("w") === false &&
      keyDown("a") === false &&
      keyDown("s") === false &&
      keyDown("d") === false &&
      touchIsDown === false &&
      mouseIsPressed === false
      ) {
    player.changeAnimation(playerDirection + "-stop");
  }

  drawSprites();
}
