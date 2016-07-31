/*
http://rawgit.com/kasrak/airtable-api-guide/master/index.html
  - in the html body
  - add the script tag for the jquery library first <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
  - then add this script tag <script src="http://kasrak.com/airtable-api-guide/airtable.browser.js"></script>

1. Signup for Airtable
2. Create a table that looks like this:
  - https://airtable.com/shrxA7L9zS767UQmp/tblRPWqrmt1xAApic/viwGLlPGmGSxLePWS

  OR

  Copy this table by clicking "Copy base" on the top right corner
  
3. Go https://airtable.com/account and click the button to generate an api key

Airtable Dynamically Generates API Documentation for you based on your base

1. Go to https://airtable.com/api
2. Click your Pokemon base
3. Click node.js
4. Click the "show API key" checkbox

Now you should have your dynamically generated API

*/

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOMsCtqWMFU58ys'
});
var base = Airtable.base('appPMXNEZuxl5PLMG');


base('Pokemon').create({
  "Type": "Alakazam",
  "Image Url": "http://i.imgur.com/mF8vUdb.png",
  "Location": "40.753424,-73.983312",
  "Captured": false
}, function(err, record) {
    if (err) { console.log(err); return; }
    console.log(record);
});

base('Pokemon').select({
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      console.log(record.get('Type'), record.get('Location'), record.get('Captured'), record.get('Image Url'), record.get('Trainer'));
    });
    fetchNextPage();
}, function done(error) {
    if (error) {
        console.log(error);
    }
});

base('Pokemon').update('recX7Z91uRDglrE8g', {
  "Trainer": "Alex Faliga"
}, function(err, record) {
    if (err) { console.log(err); return; }
    console.log(record);
});
