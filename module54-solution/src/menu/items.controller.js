(function () {
'use strict';

angular.module('data')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['data'];
function MenuItemsController(data) {
  console.log(data);

  var itemCtrl = this;
  itemCtrl.categoryShortName = data.category.short_name;
  itemCtrl.items = data.menu_items;
}

})();
