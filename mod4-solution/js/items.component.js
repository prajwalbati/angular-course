(function() {
  var data = angular.module('data');

  data.component('items', {
    templateUrl: './src/itemsComponent.html',
    controller: '',
    bindings: {
      items: '<'
    }
  });

})();
