/*
-- OLD FUNCTION ROUTE

function route(pathname) {
	console.log("Starting to process the folowing URL : '" + pathname +"'");
}*/

function route(handle, pathname, request, response) {
	console.log("[router]\t\tStarting to process the folowing URL : '" + pathname +"'");
	if (typeof handle[pathname] === 'function') {
		handle[pathname](request, response);
	}
	else {
		console.log("[router]\t\tThere is no request handler associated to : '"+ pathname +"'")
		response.writeHead(404, {"Content-Type" : "text/html"});
		response.write("I Didn't find your page... Sorry :D");
		response.end();
	}
}

exports.route = route;