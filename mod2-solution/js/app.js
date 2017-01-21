(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItem = this;

  buyItem.items = [{
      "name" : "cookies",
      "quantity" : 5
    },{
      "name" : "dairy milk",
      "quantity" : 3
    },{
      "name" : "noodles",
      "quantity" : 10
    },{
      "name" : "bread",
      "quantity" : 4
    },{
      "name" : "butter",
      "quantity" : 1
    }];

  console.log(buyItem);
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItem = this;
  console.log(boughtItem);
}

function ShoppingListCheckOffService() {
  var checkOffService = this;
  console.log(checkOffService);
}

})();
