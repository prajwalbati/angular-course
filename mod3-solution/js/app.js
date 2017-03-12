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
      items: '<',
      message: '<',
      onRemove: '&'
    },
    controller: NarrowDownDirectiveController,
    controllerAs: 'list',
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
  list.showMessage = true;
  list.searchTerm = '';
  list.foundItems = [];

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };

  list.getMatchedItems = function(searchTerm) {
    MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data) {
        list.foundItems = data;
        list.showMessage = list.foundItems.lenth>0
    });
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var menuSearch = this;
  var foundItems = [];

  menuSearch.getMatchedMenuItems = function(searchTerm) {
    foundItems = [];

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      if (searchTerm) {
        var menuItems = result.data.menu_items;
        for (var i=0; i<menuItems.length; i++) {
          var description = menuItems[i].description;
          if (description.indexOf(searchTerm)!==-1) {
            foundItems.push(menuItems[i]);
          }
        }
        return foundItems;
      } else {
        return foundItems;
      }
    });
  };

  menuSearch.removeItem = function(itemIndex) {
    foundItems.splice(itemIndex, 1);
  }
}

})();
