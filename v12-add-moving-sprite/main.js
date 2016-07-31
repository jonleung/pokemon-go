var player;

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
  image(img, 0, 0);
}

function setup() {
  createCanvas(600, 600);
  text("loading...", 0, 20);
}

function draw() {
  player = createSprite(width/2, height/2);
  playerImage = loadImage("imgs/1a.png")
  player.addImage(playerImage);

  drawSprites();
}
