(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";

  $scope.checkLunch = function () {
    var items = $scope.lunch.split(',');
    var count = countNonEmptyItems(items);
    $scope.cssMessage = "valid";
    $scope.cssInput = "validInput";

    if (count <= 3) {
      if (count == 0) {
        $scope.lunchMessage = "Please enter data";
        $scope.cssMessage = "invalid";
        $scope.cssInput = "invalidInput";
      } else {
        $scope.lunchMessage = "Enjoy";
      }
    } else {
      $scope.lunchMessage = "Too much!";
    }
  };

  function countNonEmptyItems(items) {
    var count = 0;
    for (var i=0; i<items.length; i++) {
      if (items[i].trim().length > 0) count++;
    }
    return count;
  }
}

})();
