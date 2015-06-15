var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(request, response) {
	console.log("[requestHandlers]\tThe 'start' handler has been called.");
	var body = '<html>'+
	           	'<head>'+
	           		'<meta http-equiv="Content-Type" content="text/html; '+
	           		'charset=UTF-8" />'+
	           	'</head>'+
	           	'<body>'+
	           		'<form action="/upload" method="post" enctype="multipart/form-data">'+
	           			'<input type="file" name="upload"/>'+
	           			'<input type="submit" value="Upload file" />'+
	           		'</form>'+
	           	'</body>'+
	           '</html>';
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write(body);
	response.end();
	
}

function upload(request, response) {
	console.log("[requestHandlers]\tThe 'upload' handler has been called.");

	var form = new formidable.IncomingForm();
	console.log("Récup élem reçus");
	form.parse(request, function(error, fields, files) {
		console.log("traitement terminé");
		fs.rename(files.upload.path, "tmp/test.png", function(err) {
			if (err) {
				fs.unlink("tmp/test.png");
				fs.rename(files.upload.path, "tmp/test.png");
			}
		});
	});
	response.writeHead(200, {"Content-Type" : "text/html", "charset" : "utf8"});
	response.write("Image Reçue : <br/>");
	response.write("<img src='/show' />");
	response.end();
}

function show(request, response) {
	console.log("[requestHandlers]\tThe 'show' handler has been called.");
	fs.readFile("tmp/test.png", "binary", function(error, file) {
		if (error) {
			response.writeHead(500, {"Content-Type" : "text/html", "charset" : "utf8"});
			response.write("ERROR : " + error + "\n");
			response.end();
		}
		else {
			response.writeHead(200, {"Content-Type" : "image/png"});
			response.write(file, "binary");
			response.end();	
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;