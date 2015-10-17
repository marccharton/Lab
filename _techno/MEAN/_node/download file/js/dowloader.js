// 
// @filename : config.js
// @date_creation : 30/09/2015
// @date_modification : 30/09/2015
// @author : kram47
// @projet : PDFdownloader
// 

var http = require('http-get');
var fs = require('fs');
var Multiloader = require('./Multiloader');

"use strict";

var page_value_start          = 1;
var page_value_stop           = 52;
var page_value_step           = 1;

var url_template              = "http://image.slidesharecdn.com/notefrahtml520120903-120903074949-phpapp02/95/html5-how-to-rethink-your-web-strategy-version-fr-{{%d}}-728.jpg?cb=1348833846";
var document_name             = "Fabernovel - HTML5 How to rethink your web strategy"
var destination_path          = "Files/" + document_name + "/";
var destination_file_template = "Fabernovel - HTML5 How to rethink your web strategy (page {{%d}}).jpg";

var files = [];
for (var i = page_value_start ; i <= page_value_stop ; i += page_value_step)
{
    var file_url = url_template.replace("{{%d}}", i);
    var file_name = destination_path + destination_file_template.replace("{{%d}}", i);
    
    files.push({
        url : file_url,
        name : file_name
    });
}


Multiloader.loadFiles(files);