var Ang6_2_emp = angular.module("Ang6_2_emp", []);


Ang6_2_emp.controller("bodyController", function($scope, $http){
	$scope.getData = function(){
		
		var url = "http://home.tamk.fi/~c6swolde/ang6/index.php/employees";
		
		$http.get(url).then(function(response){
			$scope.record = response.data;
			$scope.records = angular.fromJson($scope.record.data);
		}, function(error){
			console.log(error);
		});
	};
	
});
