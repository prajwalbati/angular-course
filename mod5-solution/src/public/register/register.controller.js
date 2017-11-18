(function() {
'use strict';

angular.module("public")
.controller('RegisterController', RegisterController);

RegisterController.$inject = [];
function RegisterController() {
  var $ctrl = this;

  $ctrl.submitForm = function() {
    console.log("Completed form submit");
  };

}


})();