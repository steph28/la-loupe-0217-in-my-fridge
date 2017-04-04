angular.module('app')
    .controller('MainController', function($scope, $location, recipeService) {

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
        $scope.addSelected = "";
        $scope.selected = '';
        // faire table pour mettre chq categ dans tableau et ingredients



        $scope.category = function(nb){
          var table = [$scope.dairy,$scope.meat, $scope.fish,$scope.fruits, $scope.spices, $scope.vegetables];

        $scope.dairy = ['Cheddar', 'Mozzarella', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.meat = ['Bacon', 'Beef', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.fish = ['salmon'];
        $scope.fruits = [ 'orange', 'banana', 'strawberry'];
        $scope.spices = [ 'pepper'];
        $scope.vegetables =['potatoes'];
console.log(table);
        $scope.ingredients = table[nb];
      };


        var selected = '';
        $scope.recipes = [];
        $scope.showRecipe1 = function() {
            recipeService.getSearch($scope.selected).then(function(res) {


                console.log(res.data.recipes);
                $location.path("/test");

            });


        };
        

        $scope.showRecipe = function() {
          recipeService.getAll($scope.selected).then(function(res){

                console.log(res.data.recipes);
                $scope.datas = res.data.recipes;

            });

        };
        $scope.showRecipe();
    });
