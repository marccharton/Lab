// 
// @filename : helper.js
// @date_creation : 30/09/2015
// @date_modification : 30/09/2015
// @author : kram47
// @projet : PDFdownloader
// 

"use strict";

var config = require("./config");

exports.format_string = format_string;

////////////////////////

// Helper to replace the pattern in url and file name
function format_string(string_to_format, value_to_insert) {
	var stringToRet = "";

	var replace_pattern = "";

	if (config.IsZeroMandatory)
		replace_pattern = "0" + value_to_insert;
	else
		replace_pattern = "" + value_to_insert;

	stringToRet = string_to_format.replace(config.string_pattern, replace_pattern);

	return stringToRet;
};
