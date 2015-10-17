// 
// @filename : multiloader.js
// @date_creation : 03/03/2015
// @date_modification : 30/09/2015
// @author : kram47
// @projet : PDFdownloader
// 

var http = require('http-get');
var fs = require('fs');
var colors = require('colors');

"use strict";

function load_next_file(files, finalcb) {

    if (files.length == 0) {
        finalcb(null);
        return;
    }   

    var next_url = files[0].url;
    var next_name = files[0].name;

    // console.log('will load ' + nexturl);
    process.stdout.write('=');

    var options = {
        url : next_url,
        timeout : 1000
    };

    http.get(options, next_name, function (err, result) {
        // console.log('loaded ' + nexturl);
        // delete files[nexturl];

        files.splice(0, 1);
        load_next_file(files, finalcb);
    }); 
};  

exports.loadFiles = function (files, callback) {
    var file_json_formatted = JSON.parse(JSON.stringify(files));

    process.stdout.write('[');
    load_next_file(file_json_formatted, function () {         
        process.stdout.write("] ");
        console.log("DONE !".green);
        callback();
    });
};