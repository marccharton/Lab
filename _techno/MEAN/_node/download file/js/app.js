// 
// @filename : app.js
// @date_creation : 03/03/2015
// @date_modification : 30/09/2015
// @author : kram47
// @projet : PDFdownloader
// 

var http = require('http-get');
var fs = require('fs');
var PDFDocument = require('pdfkit')
var colors = require('colors');
var Multiloader = require('./Multiloader');
var helper = require('./helper');
var config = require('./config');

"use strict";

// Creation of destination directory if it doesn't exist.
process.stdout.write("Check destination directory : ");
if (!fs.existsSync(config.destination_path)){
    fs.mkdirSync(config.destination_path);
}
console.log("DONE !".green);


// Creation of an object containing all url and files names.
var files = [];
for (var i = config.page_value_start ; i <= config.page_value_stop ; i += config.page_value_step)
{
    var file_url = helper.format_string(config.url_template, i);
    var file_name = config.destination_path + helper.format_string(config.destination_file_template, i);
    
    files.push({
        url : file_url,
        name : file_name
    });
}

// Getting all files
process.stdout.write("Downloading Files : ");
Multiloader.loadFiles(files, function() {
	process.stdout.write("Creating PDF Document : ");
    process.stdout.write('[');
	var doc = new PDFDocument();

	doc.pipe(fs.createWriteStream(config.directory + config.document_name + ".pdf"));

	for (var i = config.page_value_start ; i <= config.page_value_stop ; i += config.page_value_step)
	{	
		var slide = config.destination_path + helper.format_string(config.destination_file_template, i);
		doc.image(slide, 0, 0, { fit: [820, 820] });
		//doc.image(new Buffer(slide.replace('data:image/jpg;base64,',''), 'base64'), 100, 100); // this will decode your base64 to a new buffer

		if (i + config.page_value_step < config.page_value_stop)
			doc.addPage();
    
    	process.stdout.write('=');
	}
	
 	doc.end();
 	
 	process.stdout.write("] ");
 	console.log("DONE !".green);
});