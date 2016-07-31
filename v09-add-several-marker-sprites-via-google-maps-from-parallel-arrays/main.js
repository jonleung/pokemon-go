/*
Since we're all in different locations, for now, instead of centering the
map around your current latitude and logitude, I've  keep it the same for now
by hard coding the values.

To find an image, I'm

Make sure it's <= 64px x64px

1. Going to images.google.com
2. Filtering images that are the size of an icon
3. Filtering on colors that is transparent

  Example Query:
  https://www.google.com/search?site=&tbm=isch&source=hp&biw=853&bih=1341&q=bulbasaur&oq=bulbasaur&gs_l=img.3..0l10.3616.4567.0.4663.9.6.0.3.3.0.82.419.6.6.0....0...1ac.1.64.img..0.9.445.QT16fhoMpPc#q=bulbasaur&tbs=isz:i,ic:trans&tbm=isch&imgrc=4Wvg_ghKeN5wAM%3A

  Alternately just go here:
  http://gokestop.com/info/pokemon-stats-table/

  I've taken them and put them here:
    - 64x64: http://imgur.com/a/eHtL6
    - 128x128: http://imgur.com/a/SM6U3


4. Taking that image and uploading it to imgur
5. Getting the direct image URL of the image (http://i.imgur.com/eoGIWZp.png, not http://imgur.com/a/vhlrq )

*/

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

  var pokemonImagesArray = ["http://i.imgur.com/4CNJyMd.png", "http://i.imgur.com/JAJeqZS.png", "http://i.imgur.com/Fe0smJE.png"]
  var addressArray = ["40th street and Avenue of Americas", "40th street and 5th Avenue", "42nd street and 5th Avenue"]

  for (var i=0; i<pokemonImagesArray.length; i++) {
    var pokemonImageUrl = pokemonImagesArray[i];
    var address = addressArray[i];
    var encodedAddress = encodeURIComponent(address);

    var markersParam = "&markers=icon:" + pokemonImageUrl + "%7Cshadow:true%7C" + encodedAddress;

    fullUrl = fullUrl + markersParam;
  }
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
