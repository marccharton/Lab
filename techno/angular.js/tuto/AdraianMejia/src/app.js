
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
    { title: 'Learn Javascript', completed: true },
    { title: 'Learn Angular.js', completed: false },
    { title: 'Love this tutorial', completed: true },
    { title: 'Learn Javascript design patterns', completed: false },
    { title: 'Build Node.js backend', completed: false },
  ];
}]);


app.directive('hello', [function () {
  return {
    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    template: '<span><br>Hello</span>'
  }
}]);
