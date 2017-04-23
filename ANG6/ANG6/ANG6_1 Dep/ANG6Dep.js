var Ang6_1_dep = angular.module("Ang6_1_Dep", []);


Ang6_1_dep.controller("bodyController", function($scope, $http){
	$scope.getdetails = function(){
		
		var url = "http://home.tamk.fi/~c6swolde/ang6/index.php/departments";
		
		$http.get(url).then(function(response){
			$scope.records_ = response.data;
			$scope.records = angular.fromJson($scope.records_.data);
			// console.log($scope.records);
		}, function(error){
			console.log(error);
		});
	};
	
});
