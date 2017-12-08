(function () {
"use strict";

angular.module('public')
.component('signup', {
  templateUrl: 'src/public/signup/signup.html',
  bindings: {},
  controller: SignupController
});

SignupController.$inject = ['MenuService', 'MyInfoService'];
function SignupController(MenuService, MyInfoService) {
  var $ctrl = this;

  $ctrl.signup = function() {
    MenuService.getMenuItem($ctrl.myInfo.favoriteDish)
      .then(function(response){
        $ctrl.saved = true;
        $ctrl.myInfo.favoriteDishItem = response;
        MyInfoService.setMyInfo($ctrl.myInfo);
      })
      .catch(function(response){
        $ctrl.saved = false;
      });
  };
}

})();
