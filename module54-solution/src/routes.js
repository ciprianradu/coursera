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
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categories.template.html',
    controller: 'MenuCategoriesController as catCtrl',
    resolve: {
      data: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
          .then(function (result) {
            return result.data;
          });
      }]
    }
  })

  // Premade list page
  .state('category.items', {
    url: '/items?category=',
    templateUrl: 'src/menu/templates/items.template.html',
    controller: 'MenuItemsController as itemCtrl',
    resolve: {
      data: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getAllItemsForCategory($stateParams.category)
          .then(function (result) {
            return result.data;
          });
      }]
    }
  });
}

})();
