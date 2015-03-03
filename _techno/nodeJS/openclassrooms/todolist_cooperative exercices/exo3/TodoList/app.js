var app     = require('express')(),                     
    server  = require('http').createServer(app),     
    io      = require('socket.io').listen(server),       
    ent     = require('ent');
    
var todolist = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');   
});

io.sockets.on('connection', function (socket) {
    
    // Envoi de la dernière mise à jour de la liste au client
    socket.emit('todolist_update', todolist);
    
    // Ajout d'un élément dans la liste
    socket.on('todolist_add', function(newtodo) {
        newtodo = ent.encode(newtodo);
        todolist.push(newtodo);
        update_todolist(socket);       
    });

    // Suppression d'un élément dans la liste
    socket.on('todolist_delete', function (id) {
        todolist.splice(id, 1);         
        update_todolist(socket);
    }); 

});

function update_todolist(socket) {
    socket.broadcast.emit('todolist_update', todolist);
    socket.emit('todolist_update', todolist);
}

server.listen(8080);