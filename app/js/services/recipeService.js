angular.module('app')
    .service('recipeService', function($http) {

        return {
          getSearch: function(x) {
            return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83&count=4&q=' + x);
            },
            getAll: function(x) {
              return $http.get('http://food2fork.com/api/search?key=a9d96f05e69633450b746a68935e7b83&count=4&sort=t&q=' + x);
            },
            getById: function(id) {
              return $http.get('http://food2fork.com/api/get?key=a9d96f05e69633450b746a68935e7b83&rId=' + id);
            },
          };
          });


//key=e5e3f394c476f80a9f6b2a426d24c285
// key=9851f031a895322d4b1b9858d4fdee75
// key=a9d96f05e69633450b746a68935e7b83
