(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyInfoService', 'ApiPath'];
function SignupController(MyInfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.saved = false;
  $ctrl.basePath = ApiPath;

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

    $ctrl.saved = true;
  };

  function setCtrlInfo(myInfo){
    if (myInfo === undefined) {
      return;
    }

    console.log("setting up my info on $ctrl: ", myInfo);

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
