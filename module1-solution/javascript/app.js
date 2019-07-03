(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
   
  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.lunch = "";

    $scope.checkIt = function () {
      var lunshList = $scope.lunch.split(',').filter(function(str) {
    return /\S/.test(str);
});;
      $scope.len = lunshList.length;  
      if ($scope.lunch=="") {
        $scope.message =  "Please enter data first";
        $scope.color = "red";
        $scope.borderColor = "red";
    	} 
      else if (lunshList.length>3){
      	$scope.message =  "Too much!";
      	$scope.color = "green";
      	$scope.borderColor = "green";
      }
      else {
    	$scope.message = "Enjoy!";
    	$scope.color = "green";
    	$scope.borderColor = "green";
      };

    };

  };
      


})();

