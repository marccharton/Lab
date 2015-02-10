var http = require("http");
var url = require("url");


function start(route, handle) {
	var port = 8000;

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("[server]\t\tRequest received. For the pathname : '" + pathname + "'");
		route(handle, pathname, request, response);
	}
	http.createServer(onRequest).listen(port);
	console.log("[server]\t\tServer Started on port "+port+".");
}

exports.start = start;