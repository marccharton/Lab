/*
** ******************************************************************
** Premier test Tuto : Node.js
** ******************************************************************
*/

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
	var askedPage = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);

	console.log(askedPage);
	console.log(params);

	
	if (askedPage == '/ouechtonton' && 'coucou' in params)
	{
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.write('Ouech gros bien ou quoi ? ah mais en fait genre tu mets des parametres quoi le gars !! ton param en plus c\'est : '+  params['coucou'] +' nan mais le ouf !!');
	}	
	else if (askedPage == '/ouechpapy')
	{
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.write('Ouech grosavec un s c\'est deja mieux !! et sinon il va bien ton papy ?! c\'est important les papys !');
	}
	else
	{
		res.writeHead(404, {'Content-Type':'text/plain'});
		res.write('ben ouai mais la gars je peux rien pour toi !!');
	}	
	
	res.end();
});

server.listen('8047');