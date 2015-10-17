//
// @filename /public/js/appRoutes.js
// @project scotch-io--starter-node-angular
// @date_creation 04/10/2015
// @date_modification 04/10/2015
// @author kram47<kramoogle@gmail.com>
//

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        });

    $locationProvider.html5Mode(true);

}]);