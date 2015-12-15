///
/// @filename js/app.js
/// @datecreation 20/10/2015
///

(function($) {

    $(document).ready(function() {
        var paper = Raphael('mapHolder', 1000, 500);
        
       	var el = paper.rect(10, 20, 300, 200);
		// translate 100, 100, rotate 45°, translate -100, 0
		el.transform("t100,100r45t-100,0");

		

    });

})(jQuery);