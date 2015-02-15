var http = require('http');
var fs   = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(request, response) {
    fs.readFile("./index.html", "utf-8", function(error, content) {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(content);
    });
});

var io   = require("socket.io").listen(server);

io.sockets.on("connection", function (socket, pseudo){
    socket.emit("message", "Vous êtes bien connecté !");
    socket.broadcast.emit("message", "Il y a un nouveau client !");
    socket.on("message", function (message){
        console.log(socket.pseudo + " : " + message);
    });
    socket.on("petit_nouveau", function (pseudo){
        socket.pseudo = pseudo;
    });
    socket.emit("message", "c'est bon j'ai tout fait");
});

var port = 8080;
console.log("Listening on port " + port);
server.listen(port);
