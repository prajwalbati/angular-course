(function() {
  var data = angular.module('data');

  data.component('categoriesComponent', {
    templateUrl: './src/categoriesComponent.html',
    controller: '',
    bindings: {
      prop1: '<',
      prop2: '@',
      onAction: '&'
    }
  });

})();
