
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/todos.html',
      controller: 'TodoController'
    });
}]);

app.controller('TodoController', ['$scope', function ($scope) {
  $scope.todos = [
    { name: 'Learn Javascript', completed: true },
    { name: 'Learn Angular.js', completed: false },
    { name: 'Love this tutorial', completed: true },
    { name: 'Learn Javascript design patterns', completed: false },
    { name: 'Build Node.js backend', completed: false },
  ];
}]);


app.directive('hello', [function () {
  return {
    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    template: '<span><br>Hello</span>'
  }
}]);
