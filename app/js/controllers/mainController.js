angular.module('app')
    .controller('MainController', function($scope, $state, recipeService) {

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

        $scope.show = function (name) {
          $scope.selected = $scope.selected + ' ' + name;

        };



        $scope.dairy = ['Cheddar', 'Mozzarella', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.meat = ['Bacon', 'Beef', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.fish = ['salmon'];
        $scope.fruits = [ 'orange', 'banana', 'strawberry'];
        $scope.spices = [ 'pepper'];
        $scope.vegetables =['potatoes'];

$scope.ingredients = $scope.dairy;


        // $scope.recipes = [];
        $scope.showRecipe1 = function() {
            recipeService.getSearch($scope.selected).then(function(res) {


                console.log(res.data.recipes);
                $scope.datas = res.data.recipes;
            });
        };


        $scope.showRecipe = function() {
          recipeService.getAll($scope.selected).then(function(res){

                console.log(res.data.recipes);
                $scope.datas = res.data.recipes;

            });

        };
        $scope.showRecipe();


        $scope.showDetail = function (id) {
          $state.go('anon.detail', {id: id});
        };

    });
