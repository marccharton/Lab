/*===============================================
=               ChromeConsoleHelper             =
===============================================*/

var cch = (function ($) { 
	var self = {};

	/*==========  Private Attributes  ==========*/

	var _config = {
		"font-family" : "helvetica"
	};

	var _styles = {
		normal : {
			"background" : "none",
			"color" : "black",
			"font-size" : "1em"
		},
		h1 : {
			"color" : "#474747",
			"font-size" : "2.2em",
			"border-bottom" : "1px solid #AAA"
		},
		h2 : {
			"color" : "#474747",
			"font-size" : "1.7em",
			"border-bottom" : "1px solid #AAA"
		},
		h3 : {
			"color" : "#474747",
			"font-size" : "1.5em",
			"border-bottom" : "1px solid #AAA"
		},
		h4 : {
			"color" : "#474747",
			"font-size" : "1.4em",
			"border-bottom" : "1px solid #AAA"
		},
		h5 : {
			"color" : "#474747",
			"font-size" : "1.2em",
			"border-bottom" : "1px solid #AAA"
		},
		h6 : {
			"color" : "#474747",
			"font-size" : "1.1em",
			"border-bottom" : "1px solid #AAA"
		}
	};

	/*==========  Public Attributes  ==========*/

	self.about = {
		name : "ChromeConsoleHelper",
		object_name : "cch",
		description : "Helper for prettify text on Chrome Console",
		version : "0.0.1",
		authors : [ 
			"Marc Charton <mcharton@hotmail.fr>",
			"Eric Audran <nevosis@gmail.com>"
		]
	};

	/*==========  Public Methods  ==========*/

	self = {

		print: function(message) {
			console.log("%c%s", ComputeStyle(_styles.normal), message);
		},
	
		log: function(message) {
			console.log(message);
		},
	
		table: function (table) {
			console.table(table);
		},
	
		title: function (title, level) {
			// debugger
			if (typeof level === "undefined")
				h1(title);
			else
			{
				var headerFunctions = [h1, h2, h3, h4, h5, h6];
				headerFunctions[level-1](title);
			}
		},

		clear: function () {
			console.clear()
		}
	}


/*==========  Private Methods  ==========*/

	function ObjectToTable () {
		
	}
	
	function TableToObject () {

	}

	function h1(title) {
		console.log("%c%s", ComputeStyle(_styles.h1), title);
		console.log("");
	}

	function h2(title) {
		console.log("%c%s", ComputeStyle(_styles.h2), title);
		console.log("");
	}

	function h3(title) {
		console.log("%c%s", ComputeStyle(_styles.h3), title);
		console.log("");
	}

	function h4(title) {
		console.log("%c%s", ComputeStyle(_styles.h4), title);
		console.log("");
	}

	function h5(title) {
		console.log("%c%s", ComputeStyle(_styles.h5), title);
		console.log("");
	}

	function h6(title) {
		console.log("%c%s", ComputeStyle(_styles.h6), title);
		console.log("");
	}

	function ComputeStyle (oStyle) {
		var oStyleOUT = "";
		oStyle = ImportConfig(oStyle);

		if (typeof oStyle["color"] !== "undefined")
			oStyleOUT += FormatStyleNode(oStyle, "color");
		if (typeof oStyle["background"] !== "undefined")
			oStyleOUT += FormatStyleNode(oStyle, "background");
		if (typeof oStyle["font-family"] !== "undefined")
			oStyleOUT += FormatStyleNode(oStyle, "font-family");
		if (typeof oStyle["font-size"] !== "undefined")
			oStyleOUT += FormatStyleNode(oStyle, "font-size");
		if (typeof oStyle["border-bottom"] !== "undefined")
			oStyleOUT += FormatStyleNode(oStyle, "border-bottom");

		return oStyleOUT;
	}

	function ImportConfig(oStyle) {
		if (typeof _config["font-family"] !== "undefined")
			if (typeof oStyle["font-family"] === "undefined")
				oStyle["font-family"] = _config["font-family"];
		
		return oStyle;
	}

	function FormatStyleNode (oStyle, sPropertyName) {
		if (typeof oStyle !== "undefined" && typeof sPropertyName !== "undefined")
			return sPropertyName + " : " + oStyle[sPropertyName] + ";";
		return "";
	}


return self;

})(jQuery);


/*-----  End of ChromeConsoleHelper  ------*/