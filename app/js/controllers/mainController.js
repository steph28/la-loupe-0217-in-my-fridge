angular.module('app')
    .controller('MainController', function($scope, recipeService) {

      $scope.errors = [];

      $scope.login = function() {
          if ($scope.loginForm.$valid) {
              $scope.errors = [];
              Auth.login($scope.user).then(function(result) {
                  $state.go('user.profile');
              }).catch(function(err) {
                  $scope.errors.push(err);
              });
          }
      };

      $scope.register = function() {
          Auth.register($scope.user).then(function() {
              $state.go('anon.home');
          });
      };


        $scope.meat = ['Bacon', 'Beef', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.dairy = ['Cheddar', 'Mozzarella', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.fish = ['Fish'];
        $scope.fruits = ['Fruits'];
        $scope.spices = ['Spices'];
        $scope.vegetables = ['Vegetables'];

        $scope.ingredients = $scope.dairy;



        // $scope.recipe1 = "";
        $scope.showrecipe1 = function () {
          recipeService.getOne().then(function(res) {
            var i = 0;
            i = (Math.ceil(Math.random()*4));
            $scope.image = (res.data.recipes.image_url);
            $scope.title = (res.data.recipes.title);
            $scope.source = (res.data.recipes.source_url);

          });


        };
        $scope.showrecipe = function () {
          var i = 0;
          i = (Math.ceil(Math.random()*8));
        recipeService.getAll().then(function(res) {
          $scope.image = (res.data.recipes.image_url);
          $scope.title = (res.data.recipes.title);
          $scope.source = (res.data.recipes.source_url);
          console.log(res.data);
        });

      };
    });



        // recipeService.getAll().then(function(response){
        // console.log('mes recettes récuperées');
        // }, function (error) {
        //   console.log(' il n y a pas de recettes');
        //
        // });
