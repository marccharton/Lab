//
// @filename /public/js/services/NerdService.js
// @project scotch-io--starter-node-angular
// @date_creation 04/10/2015
// @date_modification 04/10/2015
// @author kram47<kramoogle@gmail.com>
//

angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http({
                  method: 'GET',
                  url: '/api/nerds'
                });
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

}]);
