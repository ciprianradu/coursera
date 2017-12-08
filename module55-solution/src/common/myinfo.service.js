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
      var reponse = service.getFavoriteDish(service.myInfo.favoriteDish);
      if (reponse.itemRetrivalErrorMessage !== undefined) {
        service.myInfo.itemRetrivalErrorMessage = response.itemRetrivalErrorMessage;
      }
      else {
        service.myInfo.favoriteDishItem = response;
      }
    }

    return service.myInfo;
  };

  service.getFavoriteDish = function (dish) {
    var item = {};
    MenuService.getMenuItem(dish)
      .then(function(response){
        item = response;
      })
      .catch(function(response) {
        item.itemRetrivalErrorMessage = "Went after the item and got an error: '" + response.statusText + "'. Try by id, because the specification is wrong!";
      });

      return item;
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
