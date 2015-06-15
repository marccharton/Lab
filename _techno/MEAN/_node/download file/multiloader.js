var http = require('http-get');
var fs = require('fs');

var MultiLoader = function (files, finalcb) {

    var load_next_file = function (files) {

        if (Object.keys(files) == 0) {
            finalcb(null);
            return;
        }   

        var nexturl = Object.keys(files)[0];
        var nextfnname = files[nexturl];

        console.log('will load ' + nexturl);
        http.get(nexturl, nextfnname, function (err, result) {
            console.log('loaded ' + nexturl);
            delete files[nexturl];
            load_next_file(files);
        }); 
    };  

    load_next_file(JSON.parse(JSON.stringify(files)));

};

var loadFiles = function (files) {
    MultiLoader(files, function () { console.log('finalcb'); });
}

exports.loadFiles = loadFiles;