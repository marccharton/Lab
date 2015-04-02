/*===============================================
=               ChromeConsoleHelper             =
===============================================*/

var cch = (function ($) { 
	var self = {};

	/*==========  Private Attributes  ==========*/

	var _config = {
		fontFamily : "sans-serif"
	};

	var _styles = {
		normal : "background: none; color:black; font-size: 1em;",
		h1 : "background: #474789; color: #EEE;font-size : 2em;",
		h2 : "background: #474789; color: #EEE;font-size : 1.8em;",
		h3 : "background: #474789; color: #EEE;font-size : 1.6em;",
		h4 : "background: #474789; color: #EEE;font-size : 1.4em;",
		h5 : "background: #474789; color: #EEE;font-size : 1.2em;",
		h6 : "background: #474789; color: #EEE;font-size : 1.1em;"
	};

	/*==========  Public Attributes  ==========*/

	self.about = {
		name : "ChromeConsoleHelper",
		object_name : "cch",
		description : "Helper for prettify text on Chrome Console",
		version : "0.0.1",
		authors : [ 
			"Eric Audran <nevosis@gmail.com>",
			"Marc Charton <mcharton@hotmail.fr>"
		]
	};

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
		console.log("%c %s", _styles.h1, message);
	};

	self.H2 = function(message) {
		console.log("%c %s", _styles.h2, message);
	};

	self.H3 = function(message) {
		console.log("%c %s", _styles.h3, message);
	};

	self.H4 = function(message) {
		console.log("%c %s", _styles.h4, message);
	};

	self.H5 = function(message) {
		console.log("%c %s", _styles.h5, message);
	};

	self.H6 = function(message) {
		console.log("%c %s", _styles.h6, message);
	};

	return self;

})(jQuery);


/*-----  End of ChromeConsoleHelper  ------*/;/*===========================
=            App            =
===========================*/

var App = (function ($) {

	var self = {};

	self.Init = function () {
		
		alert("Bienvenue dans mon template");
		
		console.log(cch.about);

		cch.Print("ouech les amis je suis normal");

		cch.H1("ouech les amis je suis un header H1");
		cch.H2("ouech les amis je suis un header H2");
		cch.H3("ouech les amis je suis un header H3");
		cch.H4("ouech les amis je suis un header H4");
		cch.H5("ouech les amis je suis un header H5");
		cch.H6("ouech les amis je suis un header H6");
		

		cch.Log({"This": "is", "An" : "Object"});
		cch.Table([[1,2,3], [2,3,4]]);


		var table = [
			["salut","les","copains"], 
			["ouech","tout","le", "monde"]
		];

		cch.Table(table);

	};

	return self;

})(jQuery);

/*-----  End of App  ------*/