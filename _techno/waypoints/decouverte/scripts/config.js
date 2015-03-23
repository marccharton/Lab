requirejs.config({
	baseUrl: "libs",
	paths: {
		"jquery": "jquery/dist/jquery.min",
		"waypoints": "waypoints/lib/noframework.waypoints.min",
		"main": "../scripts/main"
	},
	shim: {
		"jquery": {
			exports : '$'
		}
	}
});

require(['main']);