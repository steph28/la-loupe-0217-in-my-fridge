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

$scope.selected = '';
        $scope.meat = [{meat:'Bacon'},{meat:'Beef'} , {meat:'Breast'}, {meat:'Bushmeat'},{meat:'Chicken' } ,{meat:'Chorizo' } ,{meat:'Duck'} , {meat:'Goose'},{meat:'Ground'},{meat:'Ham'},{meat:'Mutton'}, {meat:'Pepperoni'},{meat:'Pork'},{meat:'Poultry'},{meat:'Quail'},{meat:'Rabbit'},{meat:'Sausage cooked'},{meat:'Turkey'},{meat:'Veal'},{meat:'Venison'},{meat:'Wild boar'}];
        $scope.dairy = [{dairy:'Cheddar'},{dairy:'Mozzarella'}, 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.fish = [{fish:'salmon'}];
        $scope.fruits = [{fruits:'orange'},{fruits:'banana'},{fruits:'strawberry'}];
        $scope.spices = [{spices:'pepper'}];
        $scope.vegetables = ['Vegetables'];

        $scope.ingredients = $scope.meat;


var selected = '';
  $scope.recipes = [];
        $scope.showRecipe1 = function () {
          recipeService.getSearch($scope.selected).then(function(res) {
            var i = 0;
            // for (var i = 0; i < 11; i++);
            $scope.image = (res.data.recipes[i].image_url);
            $scope.title = (res.data.recipes[i].title);
            $scope.site = (res.data.recipes[i].publisher_url);
            $scope.source = (res.data.recipes[i].source_url);
            console.log(res.data.recipes);

          });


        };
        $scope.showRecipe1();

        $scope.showRecipe = function () {
          var i = 0;

        recipeService.getAll($scope.selected).then(function(res) {

          $scope.image = (res.data.recipes[i].image_url);
          $scope.title = (res.data.recipes[i].title);
          $scope.site = (res.data.recipes[i].publisher_url);
          $scope.source = (res.data.recipes[i].source_url);
          console.log(res.data.recipes);
          $scope.recipes = res.data.recipes;
        });

      };
      $scope.showRecipe();
    });



        // recipeService.getAll().then(function(response){
        // console.log('mes recettes récuperées');
        // }, function (error) {
        //   console.log(' il n y a pas de recettes');
        //
        // });
