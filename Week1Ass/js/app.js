(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {
  $scope.inp="";

  $scope.cal = function () {
    var t=$scope.inp.split(",");
   
   if (t.length<4)
      $scope.msg="Enjoy!";
    else
      $scope.msg="Too much!";
    for (var i = t.length - 1; i >= 0; i--) {
      if (t[i].trim()=="")
      {
        i=i+1;
        $scope.msg="Part "+i+" is empty";
        break;
      }
    };
  };
};

})();
