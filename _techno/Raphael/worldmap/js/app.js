///
/// @filename js/app.js
/// @datecreation 20/10/2015
///

(function($, styles, map) {

    $(document).ready(function() {
        var paper = Raphael('mapHolder', 1000, 500);
        var attributes = styles.basic;
        var mapData = map.GenerateMap(paper, attributes);

        map.RenderMap(paper, mapData);
    });

})(jQuery, styles, map);