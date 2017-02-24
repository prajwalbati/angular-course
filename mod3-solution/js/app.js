(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");;

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = '';
  narrow.foundItems = [];

  narrow.getMatchedItems = function(searchTerm) {
    if (searchTerm)
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data) {
        narrow.foundItems = data;
        console.log(narrow.foundItems);
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
