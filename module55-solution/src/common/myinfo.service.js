(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MenuService.$inject = ['MenuService'];

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
      MenuService.getMenuItem(service.myInfo.favoriteDish).then(function(response){
        service.myInfo.favoriteDishItem = response.data;
      });
    }

    return service.myInfo;
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
