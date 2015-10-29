///
/// @filename js/app.js
/// @datecreation 20/10/2015
///

(function($, map) {

    $(document).ready(function() {
        var paper = Raphael('mapHolder', 1000, 500);
        var mapData = map.GenerateMap(paper);
        
        map.RenderMap(paper, mapData);
    });

})(jQuery, map);