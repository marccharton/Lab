/*
** ******************************************************************
** Modules
** ******************************************************************
*/

var http         = require('http');
var url          = require('url');
var querystring  = require('querystring');
var EventEmitter = require('events').EventEmitter;
var monModule    = require('monModule');
var markdown     = require('markdown').markdown;



/*
** ******************************************************************
** Server
** ******************************************************************
*/

var server = http.createServer();

server.on("request", function(req, res){
	var page = url.parse(req.url);
	var params = querystring.parse(page.query);

	console.log("Mon chemin est : " + page.pathname);

	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write("<b>Ouech les Tontons meme !</b>");

	if (page.pathname == "/endGame")
		{
			jeu.emit("gameOver", "C'est la fin mon gars !!");
			res.write(markdown.toHTML("# Bridget makes jQuery plugins"));
		}

	res.end();
});

server.listen('4747');

server.on("close", function(){
	console.log("bye Bro !");
})




/*
** ******************************************************************
** Mes events
** ******************************************************************
*/

var jeu = new EventEmitter();

jeu.on("gameOver", function(msg){
	console.log(msg);
});




/*
** ******************************************************************
** Mon Module
** ******************************************************************
*/

monModule.ouechtonton();
monModule.ouechpapy();
