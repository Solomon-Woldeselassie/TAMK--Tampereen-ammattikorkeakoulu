var Ang6_1_Pro = angular.module("Ang6_1_Pro", []);


Ang6_1_Pro.controller("bodyController", function($scope, $http){
	$scope.getdetails = function(){
		
		var url = "http://home.tamk.fi/~c6swolde/ang6/index.php/projects";
		
		$http.get(url).then(function(response){
			$scope.records_ = response.data;
			$scope.records = angular.fromJson($scope.records_.data);
			// console.log($scope.records);
		}, function(error){
			console.log(error);
		});
	};
	
});
