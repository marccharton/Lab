var express      = require("express");
var EventEmitter = require('events').EventEmitter;
var url          = require('url');
var querystring  = require('querystring');
var bodyParser 	 = require('body-parser');
var cookieParser = require('cookie-parser');
var session 	 = require('express-session');
var app 		 = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: 'todotopsecret'}));
//app.use(express.json());

var port = 8000;
var eventEmitter = new EventEmitter();

// Router - Routes Configuration
	app.use(function(req, res, next){
	    if (typeof(req.session.taskList) == 'undefined') {
	        req.session.taskList = [];
	    }
	    next();
	});

	app.get('/tasks', function(req, res){
		res.render('giveme.ejs', {list : req.session.taskList});
	});

	app.post('/tasks/add', function(req, res){
		console.log("task to add = " + req.body.task);
		if (req.body.task != '')
			req.session.taskList.push(req.body.task);
		res.redirect("/tasks");
	});

	app.get('/tasks/delete/:id', function(req, res) {
	    if (req.params.id != '')
	        req.session.taskList.splice(req.params.id, 1);
	    res.redirect('/tasks');
	})

	app.use(function(req, res, next) {
		res.redirect("/tasks");
	});

	app.use(function(req, res, next) {
		res.setHeader('Content-Type', 'text/html');
		res.status(404).send('<h1>404 - Accroche toi les amis, tu t\'es trompé</h1>');
	});

app.listen(port);
console.log("server listening on port : " + port);