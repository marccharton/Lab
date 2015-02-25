var http = require('http');
var fs = require('fs');

var maxPages = 3;
var pages = {};

var i = 1;
var path = "Fabernovel - HTML5 How to rethink your web strategy/" + "Fabernovel - HTML5 How to rethink your web strategy (page"+ i +").jpg";
var file = fs.createWriteStream(path);
var lien = "http://image.slidesharecdn.com/notefrahtml520120903-120903074949-phpapp02/95/html5-how-to-rethink-your-web-strategy-version-fr-"+i+"-728.jpg?cb=1348833846";
var request = http.get(lien, function(response) {
  response.pipe(file);
});