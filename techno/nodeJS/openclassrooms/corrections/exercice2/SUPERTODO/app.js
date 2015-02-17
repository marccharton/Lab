var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    msg_assign_id = 0,
    chat_history = {},
    item_assign_id = 0,
    items_history = {}

// Chargement de la page index.html
app.get('/', function (req, res) {
    res.render('chat.ejs');
});

io.sockets.on('connection', function (socket, pseudo) {

    console.log((new Date()) + ' Connection from origin ' + io.sockets.origin + '.');
    console.log((new Date()) + ' Connection accepted. ' + socket.id);

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo) {

        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);

        // On renvoie l'historique au nouvel entrant
        socket.emit('history', {
            chat_history: chat_history, 
            items_history: items_history
        });
    });

    // Dès qu'un pseudo change, on le stocke en variable de session
    socket.on('nouveau_pseudo', function(nouveau_pseudo) {
        nouveau_pseudo = ent.encode(nouveau_pseudo);
        ancien_pseudo = socket.pseudo;
        socket.pseudo = nouveau_pseudo;
        socket.broadcast.emit('nouveau_pseudo', {ancien_pseudo: ancien_pseudo, nouveau_pseudo: nouveau_pseudo});
    });

    // Dès qu'on reçoit un nouvel item, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('newItem', function (new_item) {
        console.log((new Date()) + " - " + socket.pseudo + " a ajouté l'item : " + new_item);

        // On formate l'item dans un objet
        var obj = {
            id: "item" + item_assign_id,
            time: (new Date()).getTime(),
            text: new_item,
            author: socket.pseudo
        };

        // On enregistre l'objet item dans items_history
        items_history[obj.id.toString()] = obj;
        item_assign_id += 1;
                
        // On broadcast l'item à tous les clients, y compris le sender
        io.sockets.emit('newItem', obj);
    });

    socket.on('removeItem', function (item_id) {
        if (typeof(items_history[item_id]) === "object") {
            console.log((new Date()) + " a retiré l'item : " + items_history[item_id].text);
            delete items_history[item_id];
            io.sockets.emit('removeItem', item_id);
        }
        else { console.log(socket.pseudo + ' a essayé de retirer un item'); }
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        console.log((new Date()) + " - " + socket.pseudo + " a écrit : " + message);

        // On formate le message dans un objet
        var objmsg = {
            id: msg_assign_id,
            time: (new Date()).getTime(),
            text: message,
            author: socket.pseudo
        };

        // On enregistre l'objet message dans chat_history
        chat_history[objmsg.id] = objmsg;
        msg_assign_id += 1;

        // On broadcast le message à tous les clients, y compris le sender
        io.sockets.emit('message', objmsg);
    });

    socket.on('is_typing', function (pseudo) {
        socket.broadcast.emit('is_typing', pseudo);
    });

    socket.on('disconnect', function () {
        console.log('A user left the chat');
    });

});

server.listen(8080, function() {
    console.log((new Date()) + " - Server is listening on port " + 8080);
}); 