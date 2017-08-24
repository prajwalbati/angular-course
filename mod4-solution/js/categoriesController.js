(function() {
  angular.module('MenuApp')
    .controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["MenuDataService"];

  function CategoriesController(MenuDataService) {
    var ctrl = this;
    MenuDataService.getAllCategories();
  }

})();
