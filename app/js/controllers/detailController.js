angular.module('app')
    .controller('DetailController', function($scope, $stateParams, recipeService) {


        recipeService.getById($stateParams.id).then(function(res) {
          console.log(res.data);
        });

    });
