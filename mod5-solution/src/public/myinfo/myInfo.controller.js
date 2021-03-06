(function() {
'use strict';

angular.module("public")
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;

  $ctrl.init = function() {
    $ctrl.user = MenuService.getUserData();
    $ctrl.menuItems = $ctrl.user.items;
    $ctrl.signedUp = $ctrl.user && $ctrl.user.firstName;
  };

}


})();