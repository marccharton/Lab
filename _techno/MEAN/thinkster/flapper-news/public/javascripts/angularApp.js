var app = angular.module('flapperNews', ['ui.router']);

/**
*
* Configuration
*
**/

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl',
				// TODO : Comprendre le resolve
				resolve: {
					postPromise: ['posts', function (posts) {
						return posts.getAll();
					}]
				}
			})
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: '/posts.html',
				controller: 'PostsCtrl',
				resolve: {
					post: ['$stateParams', 'posts', function($stateParams, posts) {
						return posts.get($stateParams.id);
					}]
				}
			});

		$urlRouterProvider.otherwise('home');
	}
]);


/**
*
* Providers
*
**/

app.factory('posts', ['$http', function ($http) {
	var o = {
		list : []
	};

	o.getAll = function () {
		return $http.get('/posts')
			.success(function (data) {
				angular.copy(data, o.list);
			});
	};

	o.create = function (post) {
		return $http.post('/posts', post)
			.success(function (data) {
				o.list.push(data);
			});
	};

	o.upvote = function (post) {
		return $http.put('/posts/' + post._id + '/upvote')
			.success(function (data) {
				post.upvotes += 1;
			});
	};

	o.get = function(id) {
		return $http.get('/posts/' + id).then(function (res) {
			return res.data;
		});
	};

	o.addComment = function(id, comment) {
		return $http.post('/posts/' + id + '/comments', comment);
	};

	o.upvoteComment = function(post, comment) {
	return $http.put('/posts/' + post._id + '/comments/'+ comment._id + '/upvote')
		.success(function(data){
			comment.upvotes += 1;
		});
	};

	return o;
}]);


/**
*
* Controllers
*
**/

app.controller('MainCtrl', ["$scope", "posts", function ($scope, posts) {
	
	$scope.posts = posts.list;

	$scope.addPost = function () {
		if (!$scope.title || $scope.title == "")
			return;
		posts.create({
			title : $scope.title,
			link : $scope.link,
		});

		$scope.title = '';
		$scope.link = '';
	};

	$scope.upvote = function (post) {
		posts.upvote(post);
	};

	$scope.downvote = function (post) {
		post.upvotes -= 1;
	};

}]);


app.controller('PostsCtrl', ['$scope', 'posts', 'post', function ($scope, posts, post) {

	$scope.post = post;
	
	$scope.incrementUpvotes = function (comment) {
		posts.upvoteComment(post, comment);
	};

	$scope.decrementUpvotes = function (comment) {
		comment.upvotes -= 1;
	};

	$scope.addComment = function () {
		if ($scope.body == '') { return ; }
		posts.addComment(post._id, {
			body: $scope.body,
			author: 'user',
		}).success(function (comment) {
			$scope.post.comments.push(comment);
		});
		$scope.body = '';
	};

}]);
