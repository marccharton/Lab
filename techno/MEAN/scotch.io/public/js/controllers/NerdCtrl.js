//
// @filename public/js/controllers/NerdCtrl.js
// @project scotch-io--starter-node-angular
// @date_creation 04/10/2015
// @date_modification 04/10/2015
// @author kram47<kramoogle@gmail.com>
//

angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    console.log("ouech");
    Nerd.get().then(function successCallback(response) {
		console.log("YOUHOU");
		console.log(response.data);
	}, function errorCallback(response) {
		console.log("ERROR");
	});
    console.log("ouech- YEAAAHHHH");
    
    
}]);