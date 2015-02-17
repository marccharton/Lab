//initialisations des composants
var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent');

//la variable doit etre globale pour etre utilisée par tous les utilisateurs connectés
var tasks = [];

/* On affiche la todolist et le formulaire */
app.get('/todo', function(req, res) { 
    res.sendFile(__dirname + '/index.html');
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/todo');
});

io.sockets.on('connection', function (socket, pseudo) {
    
    //lorsqu'un utilisateur se connecte on lui envoie la todolist
    socket.on('new_user', function() {
        socket.emit('init', tasks);
    });
    //ajout d'une tache
    socket.on('new_task', function (task) {
        task = ent.encode(task);
        tasks.push(task);

        //on envoie le signal a tout le monde y compris l'appelant pour etre sur que tout le mon a la meme info
        socket.emit('add_task', {id: (tasks.length - 1), task: task});
        socket.broadcast.emit('add_task', {id: (tasks.length - 1), task: task});
    });

    //suppression d'une tache
    socket.on('delete_task', function (id) {
        tasks.splice(id, 1);
        //vu que les indexes du tableau ne correspond plus aux ids des liens, on renvoie tout et on reconstruira la liste coté front

        //on envoie le signal a tout le monde y compris l'appelant pour etre sur que tout le mon a la meme info
        socket.emit('init', tasks);
        socket.broadcast.emit('init', tasks);
    });
});

server.listen(8000);