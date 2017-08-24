(function() {
  var data = angular.module('data');

  data.component('itemsComponent', {
    templateUrl: './src/itemsComponent.html',
    controller: '',
    bindings: {
      prop1: '<',
      prop2: '@',
      onAction: '&'
    }
  });

})();
