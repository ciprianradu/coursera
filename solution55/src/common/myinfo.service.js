(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

function MyInfoService() {
  var service = this;

  service.getMyInfo = function () {
    return service.myInfo;
  };

  service.setMyInfo = function (myInfo) {
    service.myInfo = myInfo;
  };
};

})();
