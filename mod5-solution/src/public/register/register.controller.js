(function() {
'use strict';

angular.module("public")
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['MenuService'];
function RegisterController(MenuService) {
  var $ctrl = this;

  $ctrl.submitForm = function() {
    console.log("Completed form submit");

    var items = MenuService.getMenuItems();
    console.log(items);

  };

}


})();