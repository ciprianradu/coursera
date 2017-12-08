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

  function shouldRetriveFavoriteDish(myInfo) {
    return myInfo !== undefined &&
      myInfo.favoriteDish !== '' &&
      (service.myInfo.favoriteDishItem === undefined ||
       (service.myInfo.favoriteDishItem !== undefined &&
        service.myInfo.favoriteDish !== service.myInfo.favoriteDishItem.id &&
        service.myInfo.favoriteDish !== service.myInfo.favoriteDishItem.short_name));
  }

  service.getMyInfo = function () {
    console.log("getting my info: ", service.myInfo);
    var retriveFavoriteDish = shouldRetriveFavoriteDish(service.myInfo);
    console.log("retrive favorite dish:", retriveFavoriteDish);

    if (retriveFavoriteDish) {
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
