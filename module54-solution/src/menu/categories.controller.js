(function () {
'use strict';

angular.module('data')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['data'];
function MenuCategoriesController(data) {
  var catCtrl = this;
  catCtrl.categories = data;
}

})();
