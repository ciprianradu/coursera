(function () {
'use strict';

angular.module('data')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
