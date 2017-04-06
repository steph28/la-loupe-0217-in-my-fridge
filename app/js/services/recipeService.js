angular.module('app')
    .service('recipeService', function($http) {

        return {
          getSearch: function(x) {
            return $http.get('http://food2fork.com/api/search?key=e5e3f394c476f80a9f6b2a426d24c285&count=4&q=' + x);
            },
            getAll: function(x) {
              return $http.get('http://food2fork.com/api/search?key=e5e3f394c476f80a9f6b2a426d24c285&count=4&q=' + x);
            },
            getById: function(id) {
              return $http.get('http://food2fork.com/api/get?key=e5e3f394c476f80a9f6b2a426d24c285&rId=' + id);
            },
          };
          });
