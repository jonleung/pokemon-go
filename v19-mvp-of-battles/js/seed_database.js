// This uses a library called underscore js which has a bunch of nice functions
// like `.pick`. See http://underscorejs.org/

var pokemon = _.sample(POKEDEX);
createPokemon(pokemon.name, pokemon.imageUrl, pokemon.localimagePath, "40.753474,-73.984233");

var pokemon = _.sample(POKEDEX);
createPokemon(pokemon.name, pokemon.imageUrl, pokemon.localimagePath, "40.754601,-73.983996");

var pokemon = _.sample(POKEDEX);
createPokemon(pokemon.name, pokemon.imageUrl, pokemon.localimagePath, "40.754443,-73.982131");

alert("Successfully Seeded Database. Open the Airtable to see your changes...")
