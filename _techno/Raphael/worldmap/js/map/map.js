/// 
/// @filename js/world_coord.js
/// @datecreation 20/10/2015
///

var map = (function(config, MapModel, Logger) {

    var self = {};
    
    self.paper = null;

    return {
        Init : Init,
        GenerateMap : GenerateMap
    };

    /////////////////////////////////

    function Init(paper) {
        self.paper = paper;
    };

    // Generation of Raphael Paths from countries' paths
    function GenerateMap(){

        self.paperX = self.paper.canvas.offsetLeft;
        self.paperY = self.paper.canvas.offsetTop;
        self.paperCenterX = self.paper.width / 2;
        self.paperCenterY = self.paper.height / 2;

        self.center = self.paper.circle(self.paperCenterX, self.paperCenterY, 5)
                            .attr({
                                "stroke": "red",
                                "fill": "red"
                            });
        DrawEveryCountry();
    }

    function DrawEveryCountry()
    {
        var mapObject = {};

        $.each(MapModel, function(code, pathString) {
            
            var country = new Country(self);
            country.Init(code, pathString);
            mapObject[code] = country;

        });
    }


})(config, MapModel, Logger);