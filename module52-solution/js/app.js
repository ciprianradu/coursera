(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOff', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOff'];
function ToBuyController(ShoppingListCheckOff) {
  var list = this;

  list.items = ShoppingListCheckOff.getToBuyItems();

  list.buyItem = function (index) {
    ShoppingListCheckOff.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
function AlreadyBoughtController(ShoppingListCheckOff) {
  var list = this;

  list.items = ShoppingListCheckOff.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var tobuyItems = ['Buy 15 cookies', 'Buy 20 cookies'];
  var boughtItems = [];

  service.buyItem = function (index) {
    var item = tobuyItems[index];
    tobuyItems.splice(index, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return tobuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
