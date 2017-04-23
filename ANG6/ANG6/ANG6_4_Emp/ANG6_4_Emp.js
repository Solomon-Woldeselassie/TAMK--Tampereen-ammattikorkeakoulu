var Ang6_4_emp = angular.module("Ang6_4_emp", []);


Ang6_4_emp.controller("bodyController", function($scope, $http){
	$http.get("http://home.tamk.fi/~c6swolde/ang6/index.php/employees").then(function(response){
			$scope.record = response.data;
			$scope.records = angular.fromJson($scope.record.data);
            $scope.displayData= function(index){
            $scope.selectedIndex=index; 
                            
		}; 
	});
	
});



