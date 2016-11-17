(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.message = "";
      $scope.lunchList = "";
      $scope.messageColor = "";

      $scope.checkLunch = function() {
        if ($scope.lunchList) {
          var lunchListArray = $scope.lunchList.split(',');
          if (lunchListArray.length<=3) {
            $scope.message="Enjoy!";
            $scope.messageColor = {"color":"green"};
          } else if(lunchListArray.length>3) {
            $scope.message = "Too much!";
            $scope.messageColor = {"color":"green"};
          }
        } else {
          $scope.message = "Please enter data first";
          $scope.messageColor = {"color":"red"};
        }
      };
    }

})();
