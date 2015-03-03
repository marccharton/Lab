var http = require('http-get');
var fs = require('fs');
var Multiloader = require('./Multiloader');

var maxPages = 52;

var files;
files = generateUrl();

var fileSerialized = JSON.stringify(files);
fs.writeFile("urls.json", fileSerialized, function(err) {
    if(err) console.log(err);
    else console.log("The file was saved!");
});

Multiloader.loadFiles(files);


function generateUrl(files) {
    files = {};
    for (var i = 1 ; i <= maxPages ; i++)
    {
        var key = "http://image.slidesharecdn.com/notefrahtml520120903-120903074949-phpapp02/95/html5-how-to-rethink-your-web-strategy-version-fr-"+i+"-728.jpg?cb=1348833846";
        var value = "Files/Fabernovel - HTML5 How to rethink your web strategy/" + "Fabernovel - HTML5 How to rethink your web strategy (page "+i+").jpg";
        files[key] = value;
    }

    return files;
}