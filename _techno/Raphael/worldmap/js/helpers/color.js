/// 
/// @filename js/helpers/colors.js
/// @datecreation 03/11/2015
///

var Helpers = Helpers || {};

Helpers.Color = (function() {

    return {
        GetRandomColor : GetRandomColor
    }

    /////////////////////////////////

    // Generation of Raphael Paths from countries' paths
    function GetRandomColor() 
    {
        var limit = config.colors.length;
        var index = Math.floor((Math.random() * limit))
        
        return config.colors[index];
    }

})();

