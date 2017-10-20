(function() {
  angular.module('data')
    .service('MenuDataService', ['$http', function($http) {
    return {
      getAllCategories: function() {
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json")
        }).then(function(result) {
          return result;
        });
      },
      getItemsForCategory: function(categoryShortName) {
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
        }).then(function(result) {
          return result;
        });
      }
    };
  }]);

})();
