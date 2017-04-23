var Ang6_2_pro = angular.module("Ang6_2_pro", []);


Ang6_2_pro.controller("bodyController", function($scope, $http){
	$scope.getData = function(){
		
		var url = "http://home.tamk.fi/~c6swolde/ang6/index.php/projects";
		
		$http.get(url).then(function(response){
			$scope.records_ = response.data;
			$scope.records = angular.fromJson($scope.records_.data);
		}, function(error){
			console.log(error);
		});
	};
	
});
