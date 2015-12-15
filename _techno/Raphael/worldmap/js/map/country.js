///
/// @filename js/map/country.js
/// @datecreation 03/11/2015
///

var Country = (function(config, MapService) {
    
    var self = {};

    function Country(map) {
        self = this;
        self.map = map;
    }

    Country.Init = function(code, pathString) {
        var style = config.styles.basic;

        self.code = code;
        self.path = self.map.paper.path(pathString);
        self.color = Helpers.Color.GetRandomColor();
        self.opacity = 0.6;
        self.isSelected = false;
        self.bbox = self.path.getBBox();

        style.opacity = self.opacity;
        self.path.attr(style);
        self.path.node.onmouseover = onmouseover;
        self.path.node.onmouseout = onmouseout;
        self.path.node.onclick = onclick;
        self.bbox = self.path.getBBox();

        function onmouseover(e)
        {
            if (!self.isSelected)
            {
                var style = config.styles.hover;
                style.fill = self.color;

                self.path.animate(style, 100);
            }
        };

        function onmouseout(e) 
        {
            if (!self.isSelected)
            {
                var style = config.styles.basic;
                self.path.animate(style, 500);
            }
        };

        function onclick(e) 
        {
            if (!self.isSelected)
            {
                var style = config.styles.selected;
                style.fill = self.color;
                style.opacity = 1;

                self.isSelected = true;
                //self.path.animate(style, 200);
                Logger.log(self.code + " selectionné");

                var destX = self.map.paperCenterX - self.bbox.x - self.bbox.width / 2;
                var destY = self.map.paperCenterY - self.bbox.y - self.bbox.height / 2;

                self.path.toFront() 
                self.map.center.toFront();

                self.path.animate({
                    "transform" : "t" + destX  + " " + destY + "s3",
                    "opacity" : 1
                }, 500, "elastic");

                // Appel à l'API "restcountries"
                MapService.GetCountryInformations(self.code, function (data) {
                    Logger.log(data);
                });
            }
            else
            {
                var style = config.styles.basic;

                self.isSelected = false;
                self.path.animate(style, 200);
                Logger.log(self.code + " plus selectionné");
            }
        };
    };

    return Country;

})(config, MapService);
