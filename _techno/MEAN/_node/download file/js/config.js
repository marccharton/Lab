// 
// @filename : config.js
// @date_creation : 30/09/2015
// @date_modification : 30/09/2015
// @author : kram47
// @projet : PDFdownloader
// 

"use strict";

var config = config || {};

// The value the pattern start from
config.page_value_start          = 1;

// The value until the pattern will go to
config.page_value_stop           = 52;

// The step between each page
config.page_value_step           = 1;


// The template of the url (with the pattern)
config.url_template              = "http://image.slidesharecdn.com/notefrahtml520120903-120903074949-phpapp02/95/html5-how-to-rethink-your-web-strategy-version-fr-{{%d}}-728.jpg?cb=1348833846";

// The final document name
config.document_name             = "Fabernovel - HTML5 How to rethink your web strategy"

// Files directory
config.directory                 = "Files/"

// The destination path of the document
config.destination_path          = config.directory + config.document_name + "/";

// The template for every page of the document
config.destination_file_template = "Fabernovel - HTML5 How to rethink your web strategy (page {{%d}}).jpg";

// The type of pattern to process each page
config.string_pattern            = "{{%d}}";


module.exports = config;