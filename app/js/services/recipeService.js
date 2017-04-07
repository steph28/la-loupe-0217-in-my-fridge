angular.module('app')
    .service('recipeService', function($http) {

        return {
          getSearch: function(x) {
            return $http.get('http://food2fork.com/api/search?key=9851f031a895322d4b1b9858d4fdee75&count=4&q=' + x);
            },
            getAll: function(x) {
              return $http.get('http://food2fork.com/api/search?key=9851f031a895322d4b1b9858d4fdee75&count=4&q=' + x);
            },
            getById: function(id) {
              return $http.get('http://food2fork.com/api/get?key=9851f031a895322d4b1b9858d4fdee75&rId=' + id);
            },
          };
          });
