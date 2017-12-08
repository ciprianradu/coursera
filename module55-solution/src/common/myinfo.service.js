(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['MenuService'];
function MyInfoService(MenuService) {
  var service = this;

  service.myInfo = service.myInfo || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    favoriteDish: ''
  };

  service.getMyInfo = function () {
    var response;

    console.log("getting my info: ", service.myInfo);

    if (service.myInfo && service.myInfo.favoriteDish !== '') {
      MenuService.getMenuItem(service.myInfo.favoriteDish)
        .then(function(response){
          service.myInfo.favoriteDishItem = response;
        })
        .catch(function(response) {
          service.myInfo.itemRetrivalErrorMessage = "No such menu item exists. Try by id, because the specification is wrong!";
        });
    }

    return service.myInfo;
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
