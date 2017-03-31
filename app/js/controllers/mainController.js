angular.module('app')
    .controller('MainController', function($scope, recipeService) {

        $scope.meat = ['Bacon', 'Beef', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.dairy = ['Cheddar', 'Mozzarella', 'Breast', 'Bushmeat', 'Chicken', 'Chorizo', 'Duck', 'Goose', 'Ground', 'Ham', 'Mutton', 'Pepperoni', 'Pork', 'Poultry', 'Quail', 'Rabbit', 'Sausage cooked', 'Turkey', 'Veal', 'Venison', 'Wild boar'];
        $scope.fish = ['Fish'];
        $scope.fruits = ['Fruits'];
        $scope.spices = ['Spices'];
        $scope.vegetables = ['Vegetables'];

        $scope.ingredients = $scope.dairy;






        recipeService.getAll().then(function(res) {
            $scope.all = 'res.data';
            console.log(res.data);
        });
        /* Here is your main controller */
    });
