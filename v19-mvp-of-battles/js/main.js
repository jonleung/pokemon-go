var player;
var playerDirection = "down";
var backgroundMapImage;
var music = new Audio("music/battle-vs-wild-pokemon.mp3");

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

var mode = "walk"
var opponentPokemon;

function draw() {

  if (mode === "walk") {
    clear();

    if(backgroundMapImage !== undefined) {
      image(backgroundMapImage, 0, 0);
    }

    walkPlayer();
    detectOverlaps();

    drawSprites();
  }
  else if (mode === "battle") {
  }
}

function detectOverlaps() {
  pokemonArray.forEach(function(pokemonObject) {
    if(pokemonObject.sprite !== undefined) {
      if (player.overlap(pokemonObject.sprite) && mode === "walk" && pokemonObject.sprite.removed !== true) {
        clear();
        mode = "battle";
        opponentPokemon = pokemonObject;
        music.play();
        loadImage("http://i.imgur.com/qoS7LZq.png", function(img) {
          textSize(30);
          textAlign("center");
          text("You found a wild " + opponentPokemon.name + "!", width/2, 60);
          image(img, width/2 - img.width/2, 300);
        });
        setTimeout(function() {
          mode = "walk";
          opponentPokemon.sprite.remove();
          music.pause();
          music.currentTime = 0;
          player.position.x = width/2;
          player.position.y = height/2;
        }, 4500);
      }
    }
  });
}
