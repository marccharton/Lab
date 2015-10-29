/// 
/// @filename js/world_coord.js
/// @datecreation 20/10/2015
///

(function(config, MapService, MapModel) {

    window.map = {
        GenerateMap : GenerateMap,
        RenderMap : RenderMap
    };

    /////////////////////////////////

    
    // Generation of Raphael Paths from countries' paths
    function GenerateMap(paper) 
    {
        var map = {};

        $.each(MapModel, function(key, value) {
            map[key] = {
                "code" : key,
                "path" : paper.path(value).attr(config.styles.basic),
                // "color" : Raphael.getColor(),
                "color" : config.colors[Math.floor((Math.random() * config.colors.length))],
                "opacity" : 0.6,
                "isSelected" : false,
            };
        });

        return map;
    }

    function RenderMap(paper, mapObject)
    {
        $.each(mapObject, function (countryCode, countryObject) { // key = countryCode, value = countryPath
            // console.log("countryCode = " + countryCode);

            countryObject.path.attr({opacity: countryObject.opacity});
            countryObject.path.color = countryObject.color;
            countryObject.path.node.onmouseover = onmouseover;
            countryObject.path.node.onmouseout = onmouseout;
            countryObject.path.node.onclick = onclick;

            function onmouseover() 
            {
                if (!countryObject.isSelected)
                {
                    var style = config.styles.hover;
                    style.fill = countryObject.path.color;

                    countryObject.path.animate(style, 100);
                    paper.safari();
                }
            };

            function onmouseout() 
            {
            /*  
                if (!countryObject.isSelected)
                {
                    var style = config.styles.basic;
                    countryObject.path.animate(style, 500);
                    paper.safari();
                }
                */
            };

            function onclick() 
            {
                if (!countryObject.isSelected)
                {
                    var style = config.styles.selected;
                    style.fill = countryObject.path.color;

                    countryObject.isSelected = true;
                    countryObject.path.animate(style, 200);
                    console.log(countryObject.code + " selectionné");

                    MapService.GetCountryInformations(countryObject.code, function (data) {
                        alert(data.name);
                    });

                    // countryObject.path.node.transform("t100,100r45t-100,0");
                }
                else
                {
                    var style = config.styles.basic;

                    countryObject.isSelected = false;
                    countryObject.path.animate(style, 200);
                    console.log(countryObject.code + " plus selectionné");
                }
            };

        });
    }


})(config, MapService, MapModel);