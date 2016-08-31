///
/// @filename js/app.js
/// @datecreation 20/10/2015
///

(function($, map) {

    $(document).ready(function() {
        var paper = Raphael('mapHolder', "1000", "400");
        
        map.Init(paper);
        map.GenerateMap();
    });

})(jQuery, map);