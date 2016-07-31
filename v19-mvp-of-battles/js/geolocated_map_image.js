COLORS_ARRAY = [
  "EC407A",
  "7E57C2",
  "42A5F5",
  "26C6DA",
  "66BB6A",
  "D4E157",
  "FFCA28",
  "FF7043",
  "BDBDBD",
  "EF5350",
  "AB47BC",
  "5C6BC0",
  "29B6F6",
  "26A69A",
  "9CCC65",
  "FFEE58",
  "FFA726",
  "8D6E63",
  "78909C"

]

COLORS_DICTIONARY = {
  "EC407A": 0,
  "7E57C2": 1,
  "42A5F5": 2,
  "26C6DA": 3,
  "66BB6A": 4,
  "D4E157": 5,
  "FFCA28": 6,
  "FF7043": 7,
  "BDBDBD": 8,
  "EF5350": 9,
  "AB47BC": 10,
  "5C6BC0": 11,
  "29B6F6": 12,
  "26A69A": 13,
  "9CCC65": 14,
  "FFEE58": 15,
  "FFA726": 16,
  "8D6E63": 17,
  "78909C": 18
}

var pokemonArray = [];

function onCurrentPositionGotten(position) {
  latitude = 40.753660;  // position.coords.latitude;
  longitude = -73.983290 // position.coords.longitude;

  var baseUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE"
  var sizeParam = "&size=600x600";
  var centerParam = "&center=" + latitude + "," + longitude;
  var zoomParam = "&zoom=17";

  var fullUrl = baseUrl + sizeParam + centerParam + zoomParam;

  var pokemon = [];

  base('Pokemon').select({
      view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record, i) {
          var pokemonObject = {
            location: record.get("Location"),
            name: record.get("Name"),
            imageUrl: record.get("Image Url"),
            localImagePath: record.get("Local Image Path")
          }
          pokemonArray.push(pokemonObject);

          var encodedLocation = encodeURIComponent(pokemonObject.location);
          var placeholderImageUrl = "http://dummyimage.com/15/" + COLORS_ARRAY[i];
          var markersParam = "&markers=icon:" + placeholderImageUrl + "%7Cshadow:true%7C" + encodedLocation;

          fullUrl += markersParam;
        });
        fetchNextPage();
    }, function done(error) {
        if (error) {
            console.log(error);
        }

        loadImage(fullUrl, onBackgroundMapImageLoaded);
    });
}

function onBackgroundMapImageLoaded(img) {
  backgroundMapImage = img;

  backgroundMapImage.loadPixels();
  findCoordinatesOfColorPlaceholders();
}

/*

A note that backgroundMapImage.pixels is a 1d array of ALL pixels where
el 0 = the the amount of red in the 1st pixel
el 1 = the the amount of green in the 1st pixel
el 2 = the the amount of green in the 1st pixel
el 3 = the the amount of transparency in the 1st pixel
el 4 = the the amount of red in the 2nd pixel

*/
function findCoordinatesOfColorPlaceholders() {
  var i = 0;

  for(var y=0; y<height; y++) {
    for(var x=0; x<width; x++) {
      var r = backgroundMapImage.pixels[i*4 + 0]
      var g = backgroundMapImage.pixels[i*4 + 1]
      var b = backgroundMapImage.pixels[i*4 + 2]

      var hex = rgbToHex(r, g, b);

      var colorIndex = COLORS_DICTIONARY[hex];
      if (colorIndex !== undefined) {
        var pokemonObject = pokemonArray[colorIndex];
        if (pokemonObject.x === undefined) {
          pokemonObject.x = x;
          pokemonObject.y = y;
          var sprite = createSprite(pokemonObject.x, pokemonObject.y);
          pokemonObject.sprite = sprite;
          sprite.addImage(loadImage("imgs/pokemon/"+pokemonObject.name+".png"));
        }
      }

      i++;
    }
  }
}
