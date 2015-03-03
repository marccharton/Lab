var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
/*tableau contenant toutes les taches*/
var tache = [];


/* On utilise les cookies, les sessions et les formulaires */
app.use(express.cookieParser())
.use(express.session({secret: 'todotopsecret'}))
.use(express.bodyParser())

.use(function(req, res, next){
    next();
})

/* On affiche la todolist et le formulaire */
.get('/todo', function(req, res) { 
    res.render('todo.ejs', {todolist: tache }); 
})

/* On ajoute un élément à la todolist */
.post('/todo/ajouter/', function(req, res) {
    if (req.body.newtodo != '') {
        tache.push(req.body.newtodo);
    }

     io.sockets.on('connection', function (socket) {
         socket.broadcast.emit('modificationTache'); 
    }); 
     res.redirect('/todo');
    
})

/* Supprime un élément de la todolist */
.get('/todo/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        tache.splice(req.params.id, 1);
    }
    io.sockets.on('connection', function (socket) {
         socket.broadcast.emit('modificationTache'); 
    }); 
     res.redirect('/todo');
    
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);