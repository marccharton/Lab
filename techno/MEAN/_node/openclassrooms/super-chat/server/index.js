var http = require("http");
var fs = require("fs");
var path = require("path");
var server = require("./server").createServer();
var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket, pseudo){
	
	// A l'evenement 'new_client' on determine le pseudo et on émet une notification pour prévenir de la connection.
	socket.on("new_client", function (pseudo) {
		socket.pseudo = pseudo;
		socket.emit("add_notification", "You", "are connected");
		socket.broadcast.emit("add_notification", pseudo, "vient de se connecter");
	});

	// quand le client envoie un message on lui répond avec son pseudo et on dit au autres que le message a été envoyé
	socket.on("send_message", function (message) {
		console.log("Le client dit : " + message);
		socket.emit("add_me_message", "Me", message);
		socket.broadcast.emit("add_message", socket.pseudo, message);
	});
});

var port = 8080;
console.log("Listening port ["+port+"]");
server.listen(port);