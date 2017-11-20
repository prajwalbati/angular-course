(function() {
'use strict';

angular.module("public")
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;

  $ctrl.init = function() {
    var data = MenuService.getUserData();
    console.log(data);
  };

}


})();