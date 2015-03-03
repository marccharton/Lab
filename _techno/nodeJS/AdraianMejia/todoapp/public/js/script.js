var app = angular.module('app', ['ngRoute', 'ngResource']);

//---------------
// S E R V I C E S
//---------------

/*.factory('Todos', ['$http', function($http){
   return $http.get('/todos');
}])*/

app.factory('Todos', ['$resource', function($resource){
   return $resource('/todos/:id', null, {'update': { method:'PUT' }});
}]);



//---------------
// C O N T R O L L E R S
//---------------

/*
.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
  Todos.success(function (data){
  	$scope.todos = data;
  }).error(function (data, status){
  	console.log(data, status);
  	$scope.todos = [];
  });
}])
*/

app.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
  $scope.editing = [];
  $scope.todos = Todos.query();

  $scope.save = function() {
    if(!$scope.newTodo || $scope.newTodo.length < 1) 
    	return;
    var todo = new Todos({ name: $scope.newTodo, completed: false });

    todo.$save(function(){
      $scope.todos.push(todo);
      $scope.newTodo = '';
    })
  };

  $scope.update = function (index) {
    var todo = $scope.todos[index];
    Todos.update({id: todo._id}, todo);
    $scope.editing[index] = false;
  };

  $scope.edit = function (index) {
    $scope.editing[index] = angular.copy($scope.todos[index]);
  };

  $scope.cancel = function (index) {
    $scope.todos[index] = angular.copy($scope.editing[index]);
    $scope.editing[index] = false;
  };

  $scope.remove = function(index){
    var todo = $scope.todos[index];
    Todos.remove({id: todo._id}, function(){
      $scope.todos.splice(index, 1);
    });
  };

}]);


app.controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', '$location', function ($scope, $routeParams, Todos, $location) {
  $scope.todo = Todos.get({id: $routeParams.id });

  $scope.update = function () {
    Todos.update({id: $scope.todo._id}, $scope.todo, function(){
      $location.url('/');
    });
  };

  $scope.remove = function(){
    Todos.remove({id: $scope.todo._id}, function(){
      $location.url('/');
    });
  };

}]);



//---------------
// R O U T E S
//---------------

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/todos.html',
      controller: 'TodoController'
    })

    .when('/:id', {
      templateUrl: '/todoDetails.html',
      controller: 'TodoDetailCtrl'
   });
}]);