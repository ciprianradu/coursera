(function () {
'use strict';

angular.module('data')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  console.log(items);
  
  var mainList = this;
  mainList.items = items;
}

})();
