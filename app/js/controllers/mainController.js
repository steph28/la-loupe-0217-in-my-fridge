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
        $scope.addSelected = "";
        $scope.selected = '';

        function choose(nb) {
            var table = [$scope.dairy, $scope.meat, $scope.fish, $scope.fruits, $scope.spices, $scope.vegetables];

            $scope.dairy = ['Cheddar', 'Mozzarella', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
            $scope.meat = ['Bacon', 'Beef', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
            $scope.fish = ['salmon'];
            $scope.fruits = ['orange', 'banana', 'strawberry'];
            $scope.spices = ['pepper'];
            $scope.vegetables = ['potatoes'];
            console.log(table);
            $scope.ingredients = table[nb];
        }



        $scope.recipes = [];
        $scope.showRecipe1 = function() {
            recipeService.getSearch($scope.selected).then(function(res) {


                console.log(res.data.recipes);
                $scope.datas = res.data.recipes;

                // $location.path("/test");

            });


        };


        $scope.showRecipe = function() {
            recipeService.getAll($scope.selected).then(function(res) {

                console.log(res.data.recipes);
                $scope.datas = res.data.recipes;

            });

        };
        $scope.showRecipe();
    });
