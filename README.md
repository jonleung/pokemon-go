# Pokemon Go

## Base Template

- [Base Template](https://github.com/jonleung/pokemon-go/commit/5ed6a999b3f34219f27992575578f26c31355628)

## Google Static Maps API

Get a dynamically generated and hosted image of a map area from a URL.

- This
> [`http://maps.googleapis.com/maps/api/staticmap?center=New+York+City&size=300x150`](http://maps.googleapis.com/maps/api/staticmap?center=New+York+City&size=300x150)

- Generates this
> [![](http://maps.googleapis.com/maps/api/staticmap?center=New+York+City&size=300x150)](http://maps.googleapis.com/maps/api/staticmap?center=New+York+City&size=300x150)

### Displaying the image in HTML

```html
<img src="http://maps.googleapis.com/maps/api/staticmap?center=New+York+City&size=300x150"/>
```

> [File](v1-google-static-maps-img-tag/index.html) |
  [Live](http://cdn.rawgit.com/jonleung/pokemon-go/672fa1d7a79d04e3cb5e3def83b1679b6e584409/v2-google-static-maps-p5/index.html) |
  [JS Bin](#TODO)

### Obtaining a Google Maps API Key

In the step after this one, we will be loading the image from within p5.js. In
order for this CORS request to not be blocked by Google, we need to authenticate
using an API key.

Since this process takes about ~5 minutes to complete, you may use my API key
temporarily (_Warning: the provided key may not work because only 25,000 map
loads may be made per day with this key and you will need to create your own. If
you are a teacher, to save time I would recommend creating your own key and
sharing that one key with all the students in your class_):

```
AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE
```

1. Go to https://developers.google.com/maps/documentation/static-maps/
2. Click "Get a Key" and follow the directions to create a new key.
3. For now, you can use ""
3. When you're asked "Accept requests from these HTTP referrers", leave it blank

### Adding Your Google Maps API Key To Your Query

Just add the parameter `&key=YOUR_API_KEY` to
your query, like so:

```
http://maps.googleapis.com/maps/api/staticmap?center=New+York+City&size=300x150&key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE
```

### Displaying the image in p5.js

```js
var mapImage;

function preload() {
  mapImage = loadImage("http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCSHUj37EscbQKeCSY4oyM1tCiIgRhEOTE&center=New+York+City&size=300x150")
}

function setup() {
  createCanvas(400, 200);
  background(240, 240, 240);
  image(mapImage, 0, 0);
}
```

> [File](v2-google-static-maps-p5/index.html) |
  [Live](http://cdn.rawgit.com/jonleung/pokemon-go/672fa1d7a79d04e3cb5e3def83b1679b6e584409/v2-google-static-maps-p5/index.html.html) |
  [JS Bin](#TODO)

### Static Map Maker

http://staticmapmaker.com

[![](imgs/static_map_maker.png)](http://staticmapmaker.com)

It is an interactive playground for the Google Static Maps API. You can use
to play with the parameters.

### Full Google Static Maps API Documentation

https://developers.google.com/maps/documentation/static-maps/intro#Usage

Useful Parameters:

- `zoom`

Useful Features:

- [Style Maps](https://developers.google.com/maps/documentation/static-maps/intro#StyledMaps):
  you can change the styling of the map to make it look like Pokemon Go
  (see [Pokemon Go Screenshot](https://media4.popsugar-assets.com/files/thumbor/Sw_z2W048sv8hgWnZvVcGD-3G4w/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/07/12/893/n/1922507/cb5991ee0d7471c7_main.jpg))

### Adding Markers

Using [Static Map Maker](http://staticmapmaker.com/google/), try the "Add a marker"
feature:

**Generic Marker**

[`http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C5th+avenue+and+E+14th+Street
`](http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C5th+avenue+and+E+14th+Street)

> [![](http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C5th+avenue+and+E+14th+Street)
](http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C5th+avenue+and+E+14th+Street)

**Custom Image Marker**

[`http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=icon:http://i.imgur.com/3Jk4mkU.png%7Cshadow:true%7C5th+avenue+and+E+14th+Street
`](http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=icon:http://i.imgur.com/3Jk4mkU.png%7Cshadow:true%7C5th+avenue+and+E+14th+Street)

> [![](http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=icon:http://i.imgur.com/3Jk4mkU.png%7Cshadow:true%7C5th+avenue+and+E+14th+Street)
](http://maps.googleapis.com/maps/api/staticmap?center=Union+Square+NYC&size=300x150&zoom=16&markers=icon:http://i.imgur.com/3Jk4mkU.png%7Cshadow:true%7C5th+avenue+and+E+14th+Street)

## Remainder of Tutorial

For the remainder of this tutorial, checkout `v0-base-template` all the way
through `v19-mvp-of-battles`.

I try my best to walk through a clear step of progressions as to try to
explain to the **teachers** (not student) how the code is constructed. The organization of this project is not good enough for beginning students to follow it.

After building this code up to this point, I recognize now that the later parts of this code is too complicated for beginning students. However it is worthwhile to extract the components that they can learn. APIs used include:

_**NOTE:** Please make sure to open and read all the comments in every file. I didn't have time to move them into this markdown file._

- **v1-v6** focus on the Google Maps API and String concatenation
- **simple-geolocation-example** is meant to introduce geolocation
- **v7** is focused on geolocation. Note that for subsequent versions, a fixed geolocation is used instead of using the current user's geolocation.
- **v8-v10** focus on using various JavaScript data structures
- **v11-15** focus on animating the sprite sprite as well as providing both a mobile and desktop interface
  - on the computer
    - you can use the WASD arrow keys on the computer
    - or click where you want to go
  - on your phone
    - just touch where you want to go
- **v16** focuses on refactoring the code into different functions
- **airtable-example** introduces a standalone example of creating and updating data in airtable. Make sure you read the notes in `main.js`.
- **v17-18** introduces airtable 
  - it would be ideal for each student to have their own airtable account
  - this airtable database is the best database I could find for JS because:
    - there is very good and powerful GUI interface where people who don't even know how to code know how to use it
    - the API is custom documented based on your current airtable
    - the API itself is simpler than many other APIs
  - note that there is a `seed_database.html` file which just creates 3 pokemon and puts it in the database. Just open ``
  - concurrently with the introduction of airtable, in v17, we also move
    to plotting color swatches and create the sprites on the color swatches. This process might be unnecessarily complex for studnets and resorting to plotting via x/y should be fine...
  - this also introduces a new file called pokedex.js. This file was made using import.io and shows a compelling use case of why import.io is useful. See the notes on how I used import.io at the top of this file.
- **v19** is an MVP of what a battle scene could look like. I didn't get a chance to actually do the pokeball flicking but it has a modal type change in the game... The code also get a bit sloppy here. I also add audio here.

**APIs Used:**

- Google Maps API
- import.io (defintely checkout the comments in pokedex.js)
- Airtable as a database
- The HTML5 Audio API

## License

[MIT](LICENSE)
