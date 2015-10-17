// 
// @filename : helper.js
// @date_creation : 30/09/2015
// @date_modification : 30/09/2015
// @author : kram47
// @projet : PDFdownloader
// 

var config = require("./config");

"use strict";

// Helper to replace the pattern in url and file name
exports.format_string = function(string_to_format, value_to_insert) {
	return string_to_format.replace(config.string_pattern, value_to_insert);
};
