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
				url: '/posts/{id}',
				templateUrl: '/posts.html',
				controller: 'PostsCtrl'
			});

		$urlRouterProvider.otherwise('home');
	}
]);

app.factory('posts', [function () {
	var o = {
		list : [
			{title : "text0", upvotes: 4, comments: []},
			{title : "text1", upvotes: 15, comments: []},
			{title : "text2", upvotes: 12, comments: []},
			{title : "text3", upvotes: 2, comments: []},
			{title : "text4", upvotes: 7, comments: []},
			{title : "text5", upvotes: 0, comments: []},
			{title : "text6", upvotes: 9, comments: []}
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

	$scope.post = posts.list[$stateParams.id];
	
	$scope.incrementUpvotes = function (comment) {
		comment.upvotes += 1;
	};

	$scope.decrementUpvotes = function (comment) {
		comment.upvotes -= 1;
	};

	$scope.addComment = function () {
		if ($scope.body == '') { return ; }
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body = '';
	};

}]);
