/* 
* @Author: kram 47
* @Date:   2015-02-17 10:15:28
* @Last Modified by:   kram 47
* @Last Modified time: 2015-02-17 20:33:36
*/

var socket = io.connect("http://localhost:8000");
var app = angular.module('app', ['ngRoute']);

/*
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/todos.html',
      controller: 'TodoController'
    });
}]);
*/
app.controller('TodoController', ['$scope', function ($scope) 
{
  $scope.todos = [
    { name: 'Learn Javascript', done: true },
    { name: 'Learn Angular.js', done: false },
    { name: 'Love this tutorial', done: true },
    { name: 'Learn Javascript design patterns', done: false },
    { name: 'Build Node.js backend', done: false },
  ];

  	socket.on("client:printTask", function (task) {
		$scope.todos.push(task);
	});

}]);

app.controller('FormController', ['$scope', function($scope) {
	var task = $scope.addTaskButton;

	if (task != "") {
		socket.emit("server:pushTaskToList", task);
		$scope.addTaskButton;
	}
	else
		alert("Evitez les tâches vide :D");
	return false;
}]);




/*
app.directive('hello', [function () {
  return {
    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    template: '<span><br>Hello</span>'
  }
}]);
*/

/*
$(document).ready(function () {
	// Connection au serveur
	var socket = io.connect("http://localhost:8000");

	// On ajoute un 'li' avec la tâche reçue en paramètre
	socket.on("client:printTask", function (task) {
		addTaskToList(task);
	});

	// On regénère toute la liste reçue en paramètre (tout est regénéré pour que les index correspondent à la list côté serveur)
	socket.on("client:regenerateList", function (listOfTask) {
		console.log(listOfTask);
		var ul = $(".tasks-container").empty();
		listOfTask.forEach(function (task, index) {
			addTaskToList(task);
		});
	});

	// A la validation du formulaire on envoie la tâche au serveur qui va nous générer son index.
	$("#add-task-form").submit(function (){
		var text = $("#add-task-text");
		var task = $.trim(text.val());

		if (task != "") {
			socket.emit("server:pushTaskToList", task);
			text.val("");
		}
		else
			alert("Evitez les tâches vide :D");
		return false;
	});

	// Au clic sur la croix on récupère l'index de la tâche à supprimer et on l'envoie au serveur.
	$("ul.tasks-container").on("click", "li a.delete-task", function(){
	    var link = $(this).attr("href");
		var lastSlash = link.lastIndexOf("/");
		var index = parseInt(link.substr(lastSlash+1));

		socket.emit("server:deleteTask", index);
		return false;
	});

	// Génération d'un 'li' avec la tâche passée en paramètre
	function addTaskToList(task) {
		var container = $(".tasks-container");
		var li = "";
		li += "<li class='task-item";
		if (task.done) 
			li += " task-done";
		li += "'> <a href='tasks/delete/"+task.index+"' class='delete-task'>X</a> "+task.name+"</a> </li>";
		container.append(li);
	}

});
*/