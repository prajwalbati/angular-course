(function() {
  var data = angular.module('data');

  data.component('categories', {
    templateUrl: './src/categoriesComponent.html',
    controller: CategoriesComponentController,
    bindings: {
      categories: '<'
    }
  });

  function CategoriesComponentController() {
    var $ctrl = this;
    console.log($ctrl.categories);
  };

})();
