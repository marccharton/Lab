//
// File 'main.js' 	
// Created by Moi
// Created le '24-04-2014'
// Suivant le tuto d'openclassRooms sur NodeJS
// Adresse du tuto : http://fr.openclassrooms.com/informatique/cours/des-applications-ultra-rapides-avec-node-js
//
// Comment : Oui en effet ça me manque les headers !!!
//

var express = require('express');
var md = require('markdown').markdown;

var app = express();

app.get("/", function(req, res){
	res.setHeader("Content-Type", "text/html");
	res.render('routes.ejs');
})


app.get("/ouechtonton", function(req, res){
	res.setHeader("Content-Type", "text/plain");
	res.end("Encore un putain de ouech tonton quoi !!");
});

app.get("/ouech/papy", function(req, res){
	res.setHeader("Content-Type", "text/plain");
	res.end("On peut pas dire qu'on fait dans l'originalité !! Il y a quand meme un '/' en plus c'est déja pas mal !! oh !!");
});

app.get("/etage/:etagenum", function(req, res){
	var tab = ['lol', 'coucou', 'quoi ?!','vatefaire'];
	res.render('test/chambre.ejs', {compteur : req.params.etagenum, tab : tab});
});

app.use(function(req, res){
	res.setHeader("Content-Type", "text/html");
	res.send(404, md.toHTML("# 404 Not Found"));
});

app.listen("4747");
