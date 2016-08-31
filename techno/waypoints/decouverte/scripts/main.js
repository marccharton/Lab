/*===========================================
=            main.js / Main file            =
===========================================*/


define('main', ['jquery', 'waypoints'], function($) {

    console.log("jquery version : " + $.fn.jquery);

    var waypoint = new Waypoint({
        element: document.getElementById('second'),
        handler: function(direction) {
            alert("'" + this.element.id + "' triggers at " + this.triggerPoint);
        },
        offset: 100
    })

});