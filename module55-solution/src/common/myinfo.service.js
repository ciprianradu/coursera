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
    console.log("my info: ", service.myInfo);
    if (service.myInfo && service.myInfo.favoriteDish !== '') {
      MenuService.getMenuItem(service.myInfo.favoriteDish)
        .then(function(response){
          service.myInfo.favoriteDishItem = response;
        })
        .catch(function(response) {
          service.myInfo.itemRetrivalErrorMessage = "Went after the item and got an error: '" + response.statusText + "'. Try by id, because the specification is wrong!";
        })
        .finally(function(){
          return service.myInfo;
        });
    }
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
