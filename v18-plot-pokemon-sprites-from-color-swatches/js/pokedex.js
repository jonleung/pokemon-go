/*
- I wanted to parse www.pokego.org/pokedex/
- I went to https://www.import.io/
- I pasted "www.pokego.org/pokedex/" in the box that said "Enter a URL for a
  page with data"
- I got back a CVS and removed and renamed a bunch of columns so that I finally
  had just the columns
    - num
    - name
    - imageUrl
    - pageLink
- I searched for a CVS to JSON converter (I don't need a database because none
  of this data is changing)
  - I found this http://www.csvjson.com/csv2json
*/
// I went to
// just by typing  into)

var POKEDEX = [
  {
    "num": 1,
    "name": "Bulbasaur",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/bulbasaur.png",
    "pageLink": "http://www.pokego.org/pokedex/bulbasaur/"
  },
  {
    "num": 2,
    "name": "Ivysaur",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/ivysaur.png",
    "pageLink": "http://www.pokego.org/pokedex/ivysaur/"
  },
  {
    "num": 3,
    "name": "Venusaur",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/venusaur.png",
    "pageLink": "http://www.pokego.org/pokedex/venusaur/"
  },
  {
    "num": 4,
    "name": "Charmander",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/charmander.png",
    "pageLink": "http://www.pokego.org/pokedex/charmander/"
  },
  {
    "num": 5,
    "name": "Charmeleon",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/charmeleon.png",
    "pageLink": "http://www.pokego.org/pokedex/charmeleon/"
  },
  {
    "num": 6,
    "name": "Charizard",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/charizard.png",
    "pageLink": "http://www.pokego.org/pokedex/charizard/"
  },
  {
    "num": 7,
    "name": "Squirtle",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/squirtle.png",
    "pageLink": "http://www.pokego.org/pokedex/squirtle/"
  },
  {
    "num": 8,
    "name": "Wartortle",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/wartortle.png",
    "pageLink": "http://www.pokego.org/pokedex/wartortle/"
  },
  {
    "num": 9,
    "name": "Blastoise",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/blastoise.png",
    "pageLink": "http://www.pokego.org/pokedex/blastoise/"
  },
  {
    "num": 10,
    "name": "Caterpie",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/caterpie.png",
    "pageLink": "http://www.pokego.org/pokedex/caterpie/"
  },
  {
    "num": 11,
    "name": "Metapod",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/metapod.png",
    "pageLink": "http://www.pokego.org/pokedex/metapod/"
  },
  {
    "num": 12,
    "name": "Butterfree",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/butterfree.png",
    "pageLink": "http://www.pokego.org/pokedex/butterfree/"
  },
  {
    "num": 13,
    "name": "Weedle",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/weedle.png",
    "pageLink": "http://www.pokego.org/pokedex/weedle/"
  },
  {
    "num": 14,
    "name": "Kakuna",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/kakuna.png",
    "pageLink": "http://www.pokego.org/pokedex/kakuna/"
  },
  {
    "num": 15,
    "name": "Beedrill",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/beedrill.png",
    "pageLink": "http://www.pokego.org/pokedex/beedrill/"
  },
  {
    "num": 16,
    "name": "Pidgey",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/pidgey.png",
    "pageLink": "http://www.pokego.org/pokedex/pidgey/"
  },
  {
    "num": 17,
    "name": "Pidgeotto",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/pidgeotto.png",
    "pageLink": "http://www.pokego.org/pokedex/pidgeotto/"
  },
  {
    "num": 18,
    "name": "Pidgeot",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/pidgeot.png",
    "pageLink": "http://www.pokego.org/pokedex/pidgeot/"
  },
  {
    "num": 19,
    "name": "Rattata",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/rattata.png",
    "pageLink": "http://www.pokego.org/pokedex/rattata/"
  },
  {
    "num": 20,
    "name": "Raticate",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/raticate.png",
    "pageLink": "http://www.pokego.org/pokedex/raticate/"
  },
  {
    "num": 21,
    "name": "Spearow",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/spearow.png",
    "pageLink": "http://www.pokego.org/pokedex/spearow/"
  },
  {
    "num": 22,
    "name": "Fearow",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/fearow.png",
    "pageLink": "http://www.pokego.org/pokedex/fearow/"
  },
  {
    "num": 23,
    "name": "Ekans",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/ekans.png",
    "pageLink": "http://www.pokego.org/pokedex/ekans/"
  },
  {
    "num": 24,
    "name": "Arbok",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/arbok.png",
    "pageLink": "http://www.pokego.org/pokedex/arbok/"
  },
  {
    "num": 25,
    "name": "Pikachu",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/pikachu.png",
    "pageLink": "http://www.pokego.org/pokedex/pikachu/"
  },
  {
    "num": 26,
    "name": "Raichu",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/raichu.png",
    "pageLink": "http://www.pokego.org/pokedex/raichu/"
  },
  {
    "num": 27,
    "name": "Sandshrew",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/sandshrew.png",
    "pageLink": "http://www.pokego.org/pokedex/sandshrew/"
  },
  {
    "num": 28,
    "name": "Sandslash",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/sandslash.png",
    "pageLink": "http://www.pokego.org/pokedex/sandslash/"
  },
  {
    "num": 29,
    "name": "Nidoran Female",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/nidoran-female.png",
    "pageLink": "http://www.pokego.org/pokedex/nidoran-female/"
  },
  {
    "num": 30,
    "name": "Nidorina",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/nidorina.png",
    "pageLink": "http://www.pokego.org/pokedex/nidorina/"
  },
  {
    "num": 31,
    "name": "Nidoqueen",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/nidoqueen.png",
    "pageLink": "http://www.pokego.org/pokedex/nidoqueen/"
  },
  {
    "num": 32,
    "name": "Nidoran Male",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/nidoran-male.png",
    "pageLink": "http://www.pokego.org/pokedex/nidoran-male/"
  },
  {
    "num": 33,
    "name": "Nidorino",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/nidorino.png",
    "pageLink": "http://www.pokego.org/pokedex/nidorino/"
  },
  {
    "num": 34,
    "name": "Nidoking",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/nidoking.png",
    "pageLink": "http://www.pokego.org/pokedex/nidoking/"
  },
  {
    "num": 35,
    "name": "Clefairy",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/clefairy.png",
    "pageLink": "http://www.pokego.org/pokedex/clefairy/"
  },
  {
    "num": 36,
    "name": "Clefable",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/clefable.png",
    "pageLink": "http://www.pokego.org/pokedex/clefable/"
  },
  {
    "num": 37,
    "name": "Vulpix",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/vulpix.png",
    "pageLink": "http://www.pokego.org/pokedex/vulpix/"
  },
  {
    "num": 38,
    "name": "Ninetales",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/ninetales.png",
    "pageLink": "http://www.pokego.org/pokedex/ninetales/"
  },
  {
    "num": 39,
    "name": "Jigglypuff",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/jigglypuff.png",
    "pageLink": "http://www.pokego.org/pokedex/jigglypuff/"
  },
  {
    "num": 40,
    "name": "Wigglytuff",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/wigglytuff.png",
    "pageLink": "http://www.pokego.org/pokedex/wigglytuff/"
  },
  {
    "num": 41,
    "name": "Zubat",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/zubat.png",
    "pageLink": "http://www.pokego.org/pokedex/zubat/"
  },
  {
    "num": 42,
    "name": "Golbat",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/golbat.png",
    "pageLink": "http://www.pokego.org/pokedex/golbat/"
  },
  {
    "num": 43,
    "name": "Oddish",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/oddish.png",
    "pageLink": "http://www.pokego.org/pokedex/oddish/"
  },
  {
    "num": 44,
    "name": "Gloom",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/gloom.png",
    "pageLink": "http://www.pokego.org/pokedex/gloom/"
  },
  {
    "num": 45,
    "name": "Vileplume",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/vileplume.png",
    "pageLink": "http://www.pokego.org/pokedex/vileplume/"
  },
  {
    "num": 46,
    "name": "Paras",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/paras.png",
    "pageLink": "http://www.pokego.org/pokedex/paras/"
  },
  {
    "num": 47,
    "name": "Parasect",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/parasect.png",
    "pageLink": "http://www.pokego.org/pokedex/parasect/"
  },
  {
    "num": 48,
    "name": "Venonat",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/venonat.png",
    "pageLink": "http://www.pokego.org/pokedex/venonat/"
  },
  {
    "num": 49,
    "name": "Venomoth",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/venomoth.png",
    "pageLink": "http://www.pokego.org/pokedex/venomoth/"
  },
  {
    "num": 50,
    "name": "Diglett",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/diglett.png",
    "pageLink": "http://www.pokego.org/pokedex/diglett/"
  },
  {
    "num": 51,
    "name": "Dugtrio",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/dugtrio.png",
    "pageLink": "http://www.pokego.org/pokedex/dugtrio/"
  },
  {
    "num": 52,
    "name": "Meowth",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/meowth.png",
    "pageLink": "http://www.pokego.org/pokedex/meowth/"
  },
  {
    "num": 53,
    "name": "Persian",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/persian.png",
    "pageLink": "http://www.pokego.org/pokedex/persian/"
  },
  {
    "num": 54,
    "name": "Psyduck",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/psyduck.png",
    "pageLink": "http://www.pokego.org/pokedex/psyduck/"
  },
  {
    "num": 55,
    "name": "Golduck",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/golduck.png",
    "pageLink": "http://www.pokego.org/pokedex/golduck/"
  },
  {
    "num": 56,
    "name": "Mankey",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/mankey.png",
    "pageLink": "http://www.pokego.org/pokedex/mankey/"
  },
  {
    "num": 57,
    "name": "Primeape",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/primeape.png",
    "pageLink": "http://www.pokego.org/pokedex/primeape/"
  },
  {
    "num": 58,
    "name": "Growlithe",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/growlithe.png",
    "pageLink": "http://www.pokego.org/pokedex/growlithe/"
  },
  {
    "num": 59,
    "name": "Arcanine",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/arcanine.png",
    "pageLink": "http://www.pokego.org/pokedex/arcanine/"
  },
  {
    "num": 60,
    "name": "Poliwag",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/poliwag.png",
    "pageLink": "http://www.pokego.org/pokedex/poliwag/"
  },
  {
    "num": 61,
    "name": "Poliwhirl",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/poliwhirl.png",
    "pageLink": "http://www.pokego.org/pokedex/poliwhirl/"
  },
  {
    "num": 62,
    "name": "Poliwrath",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/poliwrath.png",
    "pageLink": "http://www.pokego.org/pokedex/poliwrath/"
  },
  {
    "num": 63,
    "name": "Abra",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/abra.png",
    "pageLink": "http://www.pokego.org/pokedex/abra/"
  },
  {
    "num": 64,
    "name": "Kadabra",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/kadabra.png",
    "pageLink": "http://www.pokego.org/pokedex/kadabra/"
  },
  {
    "num": 65,
    "name": "Alakazam",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/alakazam.png",
    "pageLink": "http://www.pokego.org/pokedex/alakazam/"
  },
  {
    "num": 66,
    "name": "Machop",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/machop.png",
    "pageLink": "http://www.pokego.org/pokedex/machop/"
  },
  {
    "num": 67,
    "name": "Machoke",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/machoke.png",
    "pageLink": "http://www.pokego.org/pokedex/machoke/"
  },
  {
    "num": 68,
    "name": "Machamp",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/machamp.png",
    "pageLink": "http://www.pokego.org/pokedex/machamp/"
  },
  {
    "num": 69,
    "name": "Bellsprout",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/bellsprout.png",
    "pageLink": "http://www.pokego.org/pokedex/bellsprout/"
  },
  {
    "num": 70,
    "name": "Weepinbell",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/weepinbell.png",
    "pageLink": "http://www.pokego.org/pokedex/weepinbell/"
  },
  {
    "num": 71,
    "name": "Victreebel",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/victreebel.png",
    "pageLink": "http://www.pokego.org/pokedex/victreebel/"
  },
  {
    "num": 72,
    "name": "Tentacool",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/tentacool.png",
    "pageLink": "http://www.pokego.org/pokedex/tentacool/"
  },
  {
    "num": 73,
    "name": "Tentacruel",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/tentacruel.png",
    "pageLink": "http://www.pokego.org/pokedex/tentacruel/"
  },
  {
    "num": 74,
    "name": "Geodude",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/geodude.png",
    "pageLink": "http://www.pokego.org/pokedex/geodude/"
  },
  {
    "num": 75,
    "name": "Graveler",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/graveler.png",
    "pageLink": "http://www.pokego.org/pokedex/graveler/"
  },
  {
    "num": 76,
    "name": "Golem",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/golem.png",
    "pageLink": "http://www.pokego.org/pokedex/golem/"
  },
  {
    "num": 77,
    "name": "Ponyta",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/ponyta.png",
    "pageLink": "http://www.pokego.org/pokedex/ponyta/"
  },
  {
    "num": 78,
    "name": "Rapidash",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/rapidash.png",
    "pageLink": "http://www.pokego.org/pokedex/rapidash/"
  },
  {
    "num": 79,
    "name": "Slowpoke",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/slowpoke.png",
    "pageLink": "http://www.pokego.org/pokedex/slowpoke/"
  },
  {
    "num": 80,
    "name": "Slowbro",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/slowbro.png",
    "pageLink": "http://www.pokego.org/pokedex/slowbro/"
  },
  {
    "num": 81,
    "name": "Magnemite",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/magnemite.png",
    "pageLink": "http://www.pokego.org/pokedex/magnemite/"
  },
  {
    "num": 82,
    "name": "Magneton",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/magneton.png",
    "pageLink": "http://www.pokego.org/pokedex/magneton/"
  },
  {
    "num": 83,
    "name": "Farfetchd",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/farfetchd.png",
    "pageLink": "http://www.pokego.org/pokedex/farfetchd/"
  },
  {
    "num": 84,
    "name": "Doduo",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/doduo.png",
    "pageLink": "http://www.pokego.org/pokedex/doduo/"
  },
  {
    "num": 85,
    "name": "Dodrio",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/dodrio.png",
    "pageLink": "http://www.pokego.org/pokedex/dodrio/"
  },
  {
    "num": 86,
    "name": "Seel",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/seel.png",
    "pageLink": "http://www.pokego.org/pokedex/seel/"
  },
  {
    "num": 87,
    "name": "Dewgong",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/dewgong.png",
    "pageLink": "http://www.pokego.org/pokedex/dewgong/"
  },
  {
    "num": 88,
    "name": "Grimer",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/grimer.png",
    "pageLink": "http://www.pokego.org/pokedex/grimer/"
  },
  {
    "num": 89,
    "name": "Muk",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/muk.png",
    "pageLink": "http://www.pokego.org/pokedex/muk/"
  },
  {
    "num": 90,
    "name": "Shellder",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/shellder.png",
    "pageLink": "http://www.pokego.org/pokedex/shellder/"
  },
  {
    "num": 91,
    "name": "Cloyster",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/cloyster.png",
    "pageLink": "http://www.pokego.org/pokedex/cloyster/"
  },
  {
    "num": 92,
    "name": "Gastly",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/gastly.png",
    "pageLink": "http://www.pokego.org/pokedex/gastly/"
  },
  {
    "num": 93,
    "name": "Haunter",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/haunter.png",
    "pageLink": "http://www.pokego.org/pokedex/haunter/"
  },
  {
    "num": 94,
    "name": "Gengar",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/gengar.png",
    "pageLink": "http://www.pokego.org/pokedex/gengar/"
  },
  {
    "num": 95,
    "name": "Onix",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/onix.png",
    "pageLink": "http://www.pokego.org/pokedex/onix/"
  },
  {
    "num": 96,
    "name": "Drowzee",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/drowzee.png",
    "pageLink": "http://www.pokego.org/pokedex/drowzee/"
  },
  {
    "num": 97,
    "name": "Hypno",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/hypno.png",
    "pageLink": "http://www.pokego.org/pokedex/hypno/"
  },
  {
    "num": 98,
    "name": "Krabby",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/krabby.png",
    "pageLink": "http://www.pokego.org/pokedex/krabby/"
  },
  {
    "num": 99,
    "name": "Kingler",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/kingler.png",
    "pageLink": "http://www.pokego.org/pokedex/kingler/"
  },
  {
    "num": 100,
    "name": "Voltorb",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/voltorb.png",
    "pageLink": "http://www.pokego.org/pokedex/voltorb/"
  },
  {
    "num": 101,
    "name": "Electrode",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/electrode.png",
    "pageLink": "http://www.pokego.org/pokedex/electrode/"
  },
  {
    "num": 102,
    "name": "Exeggcute",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/exeggcute.png",
    "pageLink": "http://www.pokego.org/pokedex/exeggcute/"
  },
  {
    "num": 103,
    "name": "Exeggutor",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/exeggutor.png",
    "pageLink": "http://www.pokego.org/pokedex/exeggutor/"
  },
  {
    "num": 104,
    "name": "Cubone",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/cubone.png",
    "pageLink": "http://www.pokego.org/pokedex/cubone/"
  },
  {
    "num": 105,
    "name": "Marowak",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/marowak.png",
    "pageLink": "http://www.pokego.org/pokedex/marowak/"
  },
  {
    "num": 106,
    "name": "Hitmonlee",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/hitmonlee.png",
    "pageLink": "http://www.pokego.org/pokedex/hitmonlee/"
  },
  {
    "num": 107,
    "name": "Hitmonchan",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/hitmonchan.png",
    "pageLink": "http://www.pokego.org/pokedex/hitmonchan/"
  },
  {
    "num": 108,
    "name": "Lickitung",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/lickitung.png",
    "pageLink": "http://www.pokego.org/pokedex/lickitung/"
  },
  {
    "num": 109,
    "name": "Koffing",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/koffing.png",
    "pageLink": "http://www.pokego.org/pokedex/koffing/"
  },
  {
    "num": 110,
    "name": "Weezing",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/weezing.png",
    "pageLink": "http://www.pokego.org/pokedex/weezing/"
  },
  {
    "num": 111,
    "name": "Rhyhorn",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/rhyhorn.png",
    "pageLink": "http://www.pokego.org/pokedex/rhyhorn/"
  },
  {
    "num": 112,
    "name": "Rhydon",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/rhydon.png",
    "pageLink": "http://www.pokego.org/pokedex/rhydon/"
  },
  {
    "num": 113,
    "name": "Chansey",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/chansey.png",
    "pageLink": "http://www.pokego.org/pokedex/chansey/"
  },
  {
    "num": 114,
    "name": "Tangela",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/tangela.png",
    "pageLink": "http://www.pokego.org/pokedex/tangela/"
  },
  {
    "num": 115,
    "name": "Kangaskhan",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/kangaskhan.png",
    "pageLink": "http://www.pokego.org/pokedex/kangaskhan/"
  },
  {
    "num": 116,
    "name": "Horsea",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/horsea.png",
    "pageLink": "http://www.pokego.org/pokedex/horsea/"
  },
  {
    "num": 117,
    "name": "Seadra",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/seadra.png",
    "pageLink": "http://www.pokego.org/pokedex/seadra/"
  },
  {
    "num": 118,
    "name": "Goldeen",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/goldeen.png",
    "pageLink": "http://www.pokego.org/pokedex/goldeen/"
  },
  {
    "num": 119,
    "name": "Seaking",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/seaking.png",
    "pageLink": "http://www.pokego.org/pokedex/seaking/"
  },
  {
    "num": 120,
    "name": "Staryu",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/staryu.png",
    "pageLink": "http://www.pokego.org/pokedex/staryu/"
  },
  {
    "num": 121,
    "name": "Starmie",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/starmie.png",
    "pageLink": "http://www.pokego.org/pokedex/starmie/"
  },
  {
    "num": 122,
    "name": "Mr. Mime",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/mr-mime.png",
    "pageLink": "http://www.pokego.org/pokedex/mr-mime/"
  },
  {
    "num": 123,
    "name": "Scyther",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/scyther.png",
    "pageLink": "http://www.pokego.org/pokedex/scyther/"
  },
  {
    "num": 124,
    "name": "Jynx",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/jynx.png",
    "pageLink": "http://www.pokego.org/pokedex/jynx/"
  },
  {
    "num": 125,
    "name": "Electabuzz",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/electabuzz.png",
    "pageLink": "http://www.pokego.org/pokedex/electabuzz/"
  },
  {
    "num": 126,
    "name": "Magmar",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/magmar.png",
    "pageLink": "http://www.pokego.org/pokedex/magmar/"
  },
  {
    "num": 127,
    "name": "Pinsir",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/pinsir.png",
    "pageLink": "http://www.pokego.org/pokedex/pinsir/"
  },
  {
    "num": 128,
    "name": "Tauros",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/tauros.png",
    "pageLink": "http://www.pokego.org/pokedex/tauros/"
  },
  {
    "num": 129,
    "name": "Magikarp",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/magikarp.png",
    "pageLink": "http://www.pokego.org/pokedex/magikarp/"
  },
  {
    "num": 130,
    "name": "Gyarados",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/gyarados.png",
    "pageLink": "http://www.pokego.org/pokedex/gyarados/"
  },
  {
    "num": 131,
    "name": "Lapras",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/lapras.png",
    "pageLink": "http://www.pokego.org/pokedex/lapras/"
  },
  {
    "num": 132,
    "name": "Ditto",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/ditto.png",
    "pageLink": "http://www.pokego.org/pokedex/ditto/"
  },
  {
    "num": 133,
    "name": "Eevee",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/eevee.png",
    "pageLink": "http://www.pokego.org/pokedex/eevee/"
  },
  {
    "num": 134,
    "name": "Vaporeon",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/vaporeon.png",
    "pageLink": "http://www.pokego.org/pokedex/vaporeon/"
  },
  {
    "num": 135,
    "name": "Jolteon",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/jolteon.png",
    "pageLink": "http://www.pokego.org/pokedex/jolteon/"
  },
  {
    "num": 136,
    "name": "Flareon",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/flareon.png",
    "pageLink": "http://www.pokego.org/pokedex/flareon/"
  },
  {
    "num": 137,
    "name": "Porygon",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/porygon.png",
    "pageLink": "http://www.pokego.org/pokedex/porygon/"
  },
  {
    "num": 138,
    "name": "Omanyte",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/omanyte.png",
    "pageLink": "http://www.pokego.org/pokedex/omanyte/"
  },
  {
    "num": 139,
    "name": "Omastar",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/omastar.png",
    "pageLink": "http://www.pokego.org/pokedex/omastar/"
  },
  {
    "num": 140,
    "name": "Kabuto",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/kabuto.png",
    "pageLink": "http://www.pokego.org/pokedex/kabuto/"
  },
  {
    "num": 141,
    "name": "Kabutops",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/kabutops.png",
    "pageLink": "http://www.pokego.org/pokedex/kabutops/"
  },
  {
    "num": 142,
    "name": "Aerodactyl",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/aerodactyl.png",
    "pageLink": "http://www.pokego.org/pokedex/aerodactyl/"
  },
  {
    "num": 143,
    "name": "Snorlax",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/snorlax.png",
    "pageLink": "http://www.pokego.org/pokedex/snorlax/"
  },
  {
    "num": 144,
    "name": "Articuno",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/articuno.png",
    "pageLink": "http://www.pokego.org/pokedex/articuno/"
  },
  {
    "num": 145,
    "name": "Zapdos",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/zapdos.png",
    "pageLink": "http://www.pokego.org/pokedex/zapdos/"
  },
  {
    "num": 146,
    "name": "Moltres",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/moltres.png",
    "pageLink": "http://www.pokego.org/pokedex/moltres/"
  },
  {
    "num": 147,
    "name": "Dratini",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/dratini.png",
    "pageLink": "http://www.pokego.org/pokedex/dratini/"
  },
  {
    "num": 148,
    "name": "Dragonair",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/dragonair.png",
    "pageLink": "http://www.pokego.org/pokedex/dragonair/"
  },
  {
    "num": 149,
    "name": "Dragonite",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/dragonite.png",
    "pageLink": "http://www.pokego.org/pokedex/dragonite/"
  },
  {
    "num": 150,
    "name": "Mewtwo",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/mewtwo.png",
    "pageLink": "http://www.pokego.org/pokedex/mewtwo/"
  },
  {
    "num": 151,
    "name": "Mew",
    "imageUrl": "http://www.pokego.org/assets/img/pokemon/mew.png",
    "pageLink": "http://www.pokego.org/pokedex/mew/"
  }
]
