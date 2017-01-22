(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItem = this;
  buyItem.isEverythingBought = false;

  buyItem.items = ShoppingListCheckOffService.getToBuyItems();

  buyItem.removeItem = function(itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItem = this;

  boughtItem.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var checkOffService = this;
  var items = [
      {
        "name" : "cookies",
        "quantity" : 5
      }, {
        "name" : "dairy milk",
        "quantity" : 3
      }, {
        "name" : "noodles",
        "quantity" : 10
      }, {
        "name" : "bread",
        "quantity" : 4
      }, {
        "name" : "butter",
        "quantity" : 1
      }
  ];

  var boughtItems = [];

  checkOffService.getToBuyItems = function() {
    return items;
  };

  checkOffService.getBoughtItems = function() {
      return boughtItems;
  };

  checkOffService.removeItem = function(itemIndex) {
    boughtItems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };
}

})();
