(function () {
'use strict';

angular.module('MenuApp', ["ui.router"])
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
        controller: 'CategoriesController as categoryCtrl'
    })
    .state('items', {
        url: '/items',
        templateUrl: './src/items.html',
        controller: 'ItemsController as itemCtrl'
    });
}

})();
