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
      console.log("going to retrive the item");
      MenuService.getMenuItem(service.myInfo.favoriteDish).then(function(response){
        console.log("value retrived: ", response.data);
        service.myInfo.favoriteDishItem = response.data;
      }, function (error) {
        service.myInfo.itemRetrivalErrorMessage = error + " Try by id, because the specification is wrong!";
      });
    }

    return service.myInfo;
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
