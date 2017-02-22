(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  MenuSearchService.getMatchedMenuItems();


}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var menuSearch = this;

  menuSearch.getMatchedMenuItems = function() {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
        console.log(result);
        // process result and only keep items that match
        // var foundItems...

        // return processed items
        // return foundItems;
    });
  };
}

})();
