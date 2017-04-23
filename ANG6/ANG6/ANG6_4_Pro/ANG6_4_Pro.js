var Ang6_4_pro = angular.module("Ang6_4_pro", []);


Ang6_4_pro.controller("bodyController", function($scope, $http){		
	$http.get("http://home.tamk.fi/~c6swolde/ang6/index.php/projects").then(function(response){
			$scope.record = response.data;
			$scope.records = angular.fromJson($scope.record.data);
            $scope.displayData= function(index){
            $scope.selectedIndex=index;   
            
		}; 
		});
	
});
