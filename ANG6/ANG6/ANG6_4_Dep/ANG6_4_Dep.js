var Ang6_4_dep = angular.module("Ang6_4_dep", []);


Ang6_4_dep.controller("bodyController", function($scope, $http){
	$http.get("http://home.tamk.fi/~c6swolde/ang6/index.php/departments").then(function(response){
			$scope.record = response.data;
			$scope.records = angular.fromJson($scope.record.data);
            $scope.displayData= function(index){
			$scope.selectedIndex=index;
		};
	
	
});
});

