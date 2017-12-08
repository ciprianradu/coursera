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
    if (service.myInfo && service.myInfo.favoriteDish !== '') {
      MenuService.getMenuItem(service.myInfo.favoriteDish)
        .then(function(response){
          console.log("retrived the item: ", response);
          service.myInfo.favoriteDishItem = response.data;
        })
        .catch(function(response) {
          console.log("caught an error: ", response);
          service.myInfo.itemRetrivalErrorMessage = "Went after the item and got an error: '" + response.statusText + "'. Try by id, because the specification is wrong!";
          console.log("error message: ", service.myInfo.itemRetrivalErrorMessage);
        })
        .finally(function(){
          console.log("returning my info: ", service.myInfo);
          return service.myInfo;
        });
    }
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
