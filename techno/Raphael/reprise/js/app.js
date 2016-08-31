///
/// @filename js/app.js
/// @date_creation 16/10/2015
///

(function() {
    "use strict";

    var app = {};

    app.tetris = function () {
        var paper = new Raphael(0, 0, 500, 500);
        var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
     
        tetronimo.attr(
            {
                gradient: '90-#526c7a-#64a0c1',
                stroke: '#3b4449',
                'stroke-width': 10,
                'stroke-linejoin': 'round',
                rotation: -90
            }
        );
    };

    app.bouboules = function() {
        var paper = new Raphael(0, 0, 1000, 1000);
        var circ = paper.circle(250, 250, 20).attr({fill: '#000'});
        var mood_text = paper.text(250, 250, 'My\nMood').attr({fill: '#fff'});

        var moods = ['Rubbish', 'Not Good', 'OK', 'Smily', 'Positively Manic'];
        var colors = ['#E53935', '#3F51B5', '#03A9F4', '#4CAF50', '#FFEB3B'];
        var pos = [12,47,88,22,43,12,47,132,124,32,87,12,12,32,47,88,12,29,154,12];
         
        // Pick a mood between 1 and 5, 1 being rubbish and 5 being positively manic
     
        function show_mood (my_mood, yPos) {
            for (var i = 0; i < my_mood; i += 1) {
                setTimeout(function() {
                    paper   .circle(yPos, 250, 15)
                            .attr({stroke: 'none', fill: colors[Math.floor((Math.random() * 5))]})
                            .animate({cy : pos[i]}, 500 + 200 * (Math.floor((Math.random() * 5))), 'elastic');
                }, 10 * (i + Math.floor((Math.random() * 5))));
            }
        }

        for (var i = 0 ; i <= 19 ; i++)
        {
            show_mood(i, 20 * i);
        }

        mood_text.node.onclick = function() {
            return false;
        }
        circ.node.onclick = function() {
            return false;
        }
    }


    //app.tetris();
    app.bouboules();

})();