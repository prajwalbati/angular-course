(function() {
  angular.module('MenuApp')
    .service('MenuDataService', ['$http', function($http) {
    return {
      getAllCategories: function() {
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json")
        }).then(function(result) {
          console.log(result);
        });
      },
      getItemsForCategory: function(categoryShortName) {
        // return $http({
        //   method: "GET",
        //   url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
        // }).then(function(result) {
        //   console.log(result);
        // });
      }
    };
  }]);

})();
