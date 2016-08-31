var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request Received for : '"+ pathname +"'");
		route(pathname);
		response.writeHead(200, {"Content-Type" : "text/plain", "charset" : "UTF-8"});
		response.write("Request Received for : '"+ pathname +"'");
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(4747);
	console.log("Server Started on port 4747.");
}

exports.start = start;