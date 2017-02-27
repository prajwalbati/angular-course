(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: NarrowDownDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    bindToController: true
  };

  return ddo;
}

function NarrowDownDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = '';
  list.foundItems = [];

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + list.items.length + " items )";
  };

  list.getMatchedItems = function(searchTerm) {
    if (searchTerm)
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data) {
        list.foundItems = data;
        console.log(list.foundItems);
      });
  };



}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var menuSearch = this;

  menuSearch.getMatchedMenuItems = function(searchTerm) {
    var foundItems = [];
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var menuItems = result.data.menu_items;
      for (var i=0; i<menuItems.length; i++) {
        var description = menuItems[i].description;
        if (description.indexOf(searchTerm)!==-1) {
          foundItems.push(menuItems[i]);
        }
      }
      return foundItems;
    });
  };
}

})();
