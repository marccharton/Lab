var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

var todolist=[];

io.sockets.on('connection', function (socket) {
	
	socket.emit("todolist",{ todolist : todolist});
   
    socket.on('add', function (todo) {
		var id=todolist.push(todo);
        socket.emit("add",{ todo : todo, id : id});
        socket.broadcast.emit("add",{ todo : todo, id : id});
    });	
	
	socket.on('delete',function(id){
		todolist.splice(id);
        socket.emit("delete",{  id : id});
        socket.broadcast.emit("delete",{ id : id});
	});
	
});


server.listen(8080);