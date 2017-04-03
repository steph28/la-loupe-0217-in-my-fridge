angular.module('app')
    .service('recipeService', function($http) {

        return {
          getSearch: function(x) {
            return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83&count=12&q=' + x);
            },
            getAll: function(x) {
              return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83&count=12&q=' + x);
            },
          };
        });
// <!-- faire regex pour virgules ou espaces  -->
