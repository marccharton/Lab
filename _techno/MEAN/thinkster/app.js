var app = angular.module('flapperNews', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			})
			.state('posts', {
				url: '/post/{id}',
				templateUrl: '/posts.html',
				controller: 'PostsCtrl'
			});

		$urlRouterProvider.otherwise('home');
	}
]);

app.factory('posts', [function () {
	var o = {
		list : [
			{title : "text0", upvotes: 4},
			{title : "text1", upvotes: 15},
			{title : "text2", upvotes: 12},
			{title : "text3", upvotes: 2},
			{title : "text4", upvotes: 7},
			{title : "text5", upvotes: 0},
			{title : "text6", upvotes: 9}
		]
	};
	return o;
}]);

app.controller('MainCtrl', ["$scope", "posts", function ($scope, posts) {
	
	$scope.posts = posts.list;

	$scope.addPost = function () {
		if (!$scope.title || $scope.title == "")
			return;
		$scope.posts.push({
			title : $scope.title,
			link : $scope.link,
			upvotes: 0,
			comments: [
			    {author: 'Joe', body: 'Cool post!', upvotes: 0},
			    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
			]
		});

		$scope.title = '';
		$scope.link = '';
	};

	$scope.upvote = function (post) {
		post.upvotes += 1;
	};

	$scope.downvote = function (post) {
		post.upvotes -= 1;
	};

}]);


app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function ($scope, $stateParams, posts) {



}]);
