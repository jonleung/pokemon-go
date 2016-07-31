var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyOMsCtqWMFU58ys' }).base('appPMXNEZuxl5PLMG');

function getEachPokemon(callback) {
  base('Pokemon').select({
      view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          var pokemonObject = {
            id: record.id,
            name: record.get("Name"),
            imageUrl: record.get("Image Url"),
            location: record.get("Location"),
            trainer: record.get("Trainer")
          }

          callback(pokemonObject)
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
    });

}

function createPokemon(name, imageUrl, location) {
  base('Pokemon').create({
    "Name": name,
    "Image Url": imageUrl,
    "Location": location
  }, function(err, record) {
      if (err) { console.log(err); return; }
      console.log(record);
  });
}
