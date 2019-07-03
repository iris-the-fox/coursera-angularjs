(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
   
  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.color = "green"
    $scope.checkIt = function () {
      var lunshList = $scope.lunch.split(','); 
      $scope.len = lunshList.length;  
      if ($scope.lunch=="") {
          $scope.message =  "Please enter data first";
          $scope.color = "red"
    	} 
      else if (lunshList.length>3){
      	$scope.message =  "Too much!";
      }
      else {
    		$scope.message = "Enjoy!";
      };

    };

  };
      


})();

