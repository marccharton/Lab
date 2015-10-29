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
config.page_value_stop           = 21;

// The step between each page
config.page_value_step           = 01;


// The template of the url (with the pattern)
config.url_template              = "https://manuwino.files.wordpress.com/2015/10/slayerzenith2015-{{%d}}.jpg?w=1000&h=&crop=1";

// The final document name
config.document_name             = "Slayer Zenith 2015"

// Files directory
config.directory                 = "Files/"

// The destination path of the document
config.destination_path          = config.directory + config.document_name + "/";

// The template for every page of the document
config.destination_file_template = "Slayer Zenith 2015 {{%d}}.jpg";

// The type of pattern to process each page
config.string_pattern            = "{{%d}}";

// The export of pdf
config.IsExportPdfActivated      = false;

// IsZeroMandatory
config.IsZeroMandatory           = true;

module.exports = config;