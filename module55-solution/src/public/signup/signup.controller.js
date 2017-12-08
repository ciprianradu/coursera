(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyInfoService'];
function SignupController(MyInfoService) {
  var $ctrl = this;
  $ctrl.saved = false;

  setCtrlInfo(MyInfoService.getMyInfo());

  $ctrl.signup = function() {
    var myInfo = {};
    myInfo.firstName = $ctrl.firstName;
    myInfo.lastName = $ctrl.lastName;
    myInfo.email = $ctrl.email;
    myInfo.phone = $ctrl.phone;
    myInfo.favoriteDish = $ctrl.favoriteDish;

    MyInfoService.setMyInfo(myInfo);
    setCtrlInfo(MyInfoService.getMyInfo());

    console.log("retriving my info: ", $ctrl);

    $ctrl.saved = true;
  }

  function setCtrlInfo(myInfo){
    if (myInfo == undefined) {
      return;
    }

    console.log("retriving my info: ", myInfo);

    $ctrl.firstName = myInfo.firstName;
    $ctrl.lastName = myInfo.lastName;
    $ctrl.email = myInfo.email;
    $ctrl.phone = myInfo.phone;
    $ctrl.favoriteDish = myInfo.favoriteDish;
    $ctrl.favoriteDishItem = myInfo.favoriteDishItem;
    $ctrl.itemRetrivalErrorMessage = myInfo.itemRetrivalErrorMessage;
  }
}

})();
