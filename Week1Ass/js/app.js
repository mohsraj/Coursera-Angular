(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {
  $scope.status = "11";
  console.log("11");

  $scope.cal = function () {
    console.log("22");
    $scope.status="22"; 
  };
}

})();
