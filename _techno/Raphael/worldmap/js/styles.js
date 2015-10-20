///
/// @filename js/styles.js
/// @datecreation 20/10/2015
///

(function () {
	
	var styles = {};

	styles.basic = {
        "fill": "#777",
        "stroke": "#000",
        "stroke-width": .2,
        "stroke-linejoin": "round"
    };

	styles.hover = {
		"stroke": "#EEE",
		"stroke-width" : 1
	};

	styles.selected = {
		"fill": "#EEE",
		"stroke": "#000"
	};

	window.styles = styles;

})();