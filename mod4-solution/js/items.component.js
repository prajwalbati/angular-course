(function() {
  var data = angular.module('data');
  data.component('items', {
    templateUrl: './src/itemsComponent.html',
    controller: ItemsComponentController,
    bindings: {
      items: '<'
    }
  });

  function ItemsComponentController() {
    var $ctrl = this;
  }

})();
