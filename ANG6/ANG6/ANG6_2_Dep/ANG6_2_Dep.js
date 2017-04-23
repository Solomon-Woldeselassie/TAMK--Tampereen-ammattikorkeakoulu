var Ang6_2_dep = angular.module("Ang6_2_dep", []);


Ang6_2_dep.controller("bodyController", function($scope, $http){
	$scope.getData = function(){
		
		var url = "http://home.tamk.fi/~c6swolde/ang6/index.php/departments";
		
		$http.get(url).then(function(response){
			$scope.records_ = response.data;
			$scope.records = angular.fromJson($scope.records_.data);
		}, function(error){
			console.log(error);
		});
	};
	
});
