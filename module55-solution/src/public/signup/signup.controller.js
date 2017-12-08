(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyInfoService'];
function SignupController(MyInfoService) {
  var $ctrl = this;
  var myInfo = MyInfoService.getMyInfo();

  $ctrl.saved = false;
  $ctrl.firstName = myInfo.firstName;
  $ctrl.lastName = myInfo.lastName;
  $ctrl.email = myInfo.email;
  $ctrl.phone = myInfo.phone;
  $ctrl.favoriteDish = myInfo.favoriteDish;
  $strl.favoriteDishItem = myInfo.favoriteDishItem;

  $ctrl.signup = function() {
    var myInfo = {};
    myInfo.firstName = $ctrl.firstName;
    myInfo.lastName = $ctrl.lastName;
    myInfo.email = $ctrl.email;
    myInfo.phone = $ctrl.phone;
    myInfo.favoriteDish = $ctrl.favoriteDish;

    MyInfoService.setMyInfo(myInfo);

    $ctrl.saved = true;
  }
}

})();
