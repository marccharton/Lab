/*===============================================
=               ChromeConsoleHelper             =
===============================================*/

var cch = (function ($) { 
	var self = {};

	/*==========  Private Attributes  ==========*/

	var _config = {
		fontFamily : "sans-serif"
	}

	var _styles = {
		normal : "background: none; color:black; font-size: 1em;",
		h1 : "background: #474789; color: #EEE;font-size : 2em;",
		h2 : "background: #474789; color: #EEE;font-size : 1.8em;",
		h3 : "background: #474789; color: #EEE;font-size : 1.6em;",
		h4 : "background: #474789; color: #EEE;font-size : 1.4em;",
		h5 : "background: #474789; color: #EEE;font-size : 1.2em;",
		h6 : "background: #474789; color: #EEE;font-size : 1.1em;"
	}

	/*==========  Public Attributes  ==========*/

	self.about = {
		name : "ChromeConsoleHelper",
		object_name : "cch",
		description : "Helper for prettify text on Chrome Console",
		version : "0.0.1",
		authors : [ 
			{ 
				fullname : "Marc Charton", 
				mail : "mcharton@hotmail.fr"
			},
			{ 
				fullname : "Eric Audran",
				mail : "nevosis@gmail.com"
			}
		]
	}

	/*==========  Private Methods  ==========*/

	function ObjectToTable () {
		
	}
	
	function TableToObject () {

	}

	/*==========  Public Methods  ==========*/

	self.Print = function(message) {
		console.log("%c %s", _styles.normal, message);
	};

	self.Log = function(message) {
		console.log(message);
	};

	self.Table = function (table) {
		console.table(table);
	};


	self.H1 = function(message) {
		console.log("%c %s", _styles.header.h1, message);
	};

	self.H2 = function(message) {
		console.log("%c %s", _styles.header.h2, message);
	};

	self.H3 = function(message) {
		console.log("%c %s", _styles.header.h3, message);
	};

	self.H4 = function(message) {
		console.log("%c %s", _styles.header.h4, message);
	};

	self.H5 = function(message) {
		console.log("%c %s", _styles.header.h5, message);
	};

	self.H6 = function(message) {
		console.log("%c %s", _styles.header.h6, message);
	};

	return self;

})(jQuery);


/*-----  End of ChromeConsoleHelper  ------*/