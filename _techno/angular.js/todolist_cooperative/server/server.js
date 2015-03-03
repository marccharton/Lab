
// ************* R E Q U I R E M E N T S *************

var http		 = require('http');
var url          = require('url');
var path         = require('path');
var ent          = require('ent');
var querystring  = require('querystring');
var bodyParser 	 = require('body-parser');
var cookieParser = require('cookie-parser');
var express      = require("express");
var app 		 = express();
var server 		 = http.createServer(app);
var io 			 = require("socket.io").listen(server);

var port = 8000;


// ************* C O N F I G U R A T I O N *************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
// app.use(session({secret: 'mysupersecret'}));
// app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
// app.use(express.static(path.resolve(__dirname + '../' + 'public')));
app.use('/css', express.static(__dirname+'/css'));
app.use('/js', express.static(__dirname+'/js'));
app.set('views', path.join(__dirname, '..', 'views'));

var taskList = [	{name:"Récupérer le projet", done:true}, 
					{name:"Installer les modules", done:true}, 
					{name:"Tester le projet", done:false}, 
					{name:"Jetter un coup d'oeil au code", done:false}, 
					{name:"Regretter qu'on ne puisse pas valider une tache", done:false} ];


// ************* S O C K E T . I O *************

io.sockets.on("connection", function (socket) {
    
    // Ajout d'une tache à la liste, et envoie de la tache (avec l'index) aux clients
    socket.on("server:pushTaskToList", function (taskName) {
    	taskName = ent.encode(taskName);
    	taskList.push({name:taskName, done:false});
    	var index = taskList.length - 1;
		var task = { name : taskName, 
					 done : false};

    	socket.emit("client:printTask", task);
    	socket.broadcast.emit("client:printTask", task);
    });

    // Suprression d'une tâche de la liste, on envoie ensuite la nouvelle liste (avec les index) aux clients
	socket.on("server:deleteTask", function (index) {
		taskList.splice(index, 1);
		var listToSend = [];
		taskList.forEach(function (item, index) {
			listToSend.push({ name:item.name,
							  done:item.done,
							  index:index });
		});
		socket.emit("client:regenerateList", listToSend);
		socket.broadcast.emit("client:regenerateList", listToSend);
	});

});



// ************* R O U T E R *************

// Redirection de '/' vers '/tasks'
app.get("/", function (req, res, next) {
	res.redirect("/tasks");
});

// '/tasks' : rendu de la liste
app.get('/tasks', function (req, res) {
	res.sendFile('/views/index.html', {root:"../"});
});

// Si aucune des route précédentes ne match alors on envoi un 404
app.use(function (req, res, next) {
	//res.setHeader('Content-Type', 'text/html');
	//res.status(404).send('<h1>404 - Accroche toi les amis, tu t\'es trompé</h1>');
	res.render('404.ejs', {route:req.url});
});



// ************* L I S T E N *************

// On écoute sur le {port}
server.listen(port, function () {
	console.log("Listening on localhost:"+port);
});