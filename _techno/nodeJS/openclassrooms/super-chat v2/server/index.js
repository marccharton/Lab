var http = require("http");
var connect = require('connect');
var path = require("path");
var ent = require('ent');
var express = require("express");
var app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var cookieParser = require('cookie-parser')();
var session = require('express-session')({ secret: 'secret' });
/*var sessionStore = new session.MemoryStore();
var SessionSockets = require('session.socket.io');*/
/*var sessionSockets = new SessionSockets(io, sessionStore, cookieParser);*/

app.use(express.static(path.join(__dirname, '../')));
app.use('/styles', express.static(__dirname+'/styles'));
app.use('/scripts', express.static(__dirname+'/scripts'));
app.use(cookieParser);
app.use(session);

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.use(function(socket, next) {
    var req = socket.handshake;
    var res = {};
    cookieParser(req, res, function(err) {
        if (err) return next(err);
        session(req, res, next);
    });
});

io.on('connection', function (socket) {
   	// socket.handshake.session['user'] = {pseudo : "You"};
    // console.log("Session: ", socket.handshake.session);

    // A l'evenement 'new_client' on demande un login si la variable n'est pas stockée dans la session
	socket.on("new_client", function () {
		console.log("nouveau client, typeof session.user : ", typeof socket.handshake.session['user']);
		if (typeof socket.handshake.session['user'] == "undefined")
			socket.emit("need_login");
	});

	// A l'evenement 'new_client' on determine le pseudo et on émet une notification pour prévenir de la connection.
	socket.on("connect_client", function (pseudo) {
		pseudo = ent.encode(pseudo);
		socket.handshake.session['user'] = {pseudo : pseudo};
		socket.emit("add_notification", "You", "are connected");
		socket.broadcast.emit("add_notification", socket.handshake.session['user'].pseudo, "vient de se connecter");
	});

	// quand le client envoie un message on lui répond avec son pseudo et on dit au autres que le message a été envoyé
	socket.on("send_message", function (message) {
		message = ent.encode(message);
		console.log(socket.handshake.session['user'].pseudo+" dit : " + message);
		socket.emit("add_me_message", "Me", message);
		socket.broadcast.emit("add_message", socket.handshake.session['user'].pseudo, message);
	});

	// on affiche une notification quand le client se déconnecte
	socket.on('disconnect', function(){
		if (typeof socket.handshake.session['user'] != "undefined")
			socket.broadcast.emit("add_notification", socket.handshake.session['user'].pseudo, "vient de se déconnecter");
	});
});

var port = 8080;
server.listen(port, function () {
	console.log("Listening on localhost:"+port);
});
