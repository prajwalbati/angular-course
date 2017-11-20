(function() {
'use strict';

angular.module("public")
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['MenuService'];
function RegisterController(MenuService) {
  var $ctrl = this;

  $ctrl.submitForm = function() {
    var menuNumber = $ctrl.user.menuNumber;
    MenuService.getMenuItems(menuNumber).then(function(items) {
      $ctrl.invalidMenu = items["menu_items"].length<1;
      if (!$ctrl.invalidMenu) {
        var userData = $ctrl.user;
        MenuService.saveUserData(userData);
        $ctrl.submitComplete = "Your information has been saved";
      }
    });
  };

}


})();