(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
    // Home page
    .state('home', {
        url: '/',
        templateUrl: './src/home.html'
    })
    .state('categories', {
        url: '/categories',
        templateUrl: './src/categories.html',
        controller: 'CategoriesController as categoryCtrl',
        resolve : {
          categories : ["MenuDataService", function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
    })
    .state('items', {
        url: '/items/{stname}',
        templateUrl: './src/items.html',
        controller: 'ItemsController as itemCtrl',
        resolve : {
          items : ["MenuDataService", "$stateParams", function(MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.stname);
          }]
        }
    });
}

})();
