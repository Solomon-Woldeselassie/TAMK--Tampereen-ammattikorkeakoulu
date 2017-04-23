var myApp = angular.module("myApp", []);


myApp.controller("bodyController", function($scope, $http){
	$scope.getdetails = function(){
		
		var url = "http://home.tamk.fi/~kujesa/countries.php";
		
		$http.get(url).then(function(response){
			$scope.countries = response.data;
			console.log($scope.countries);
		}, function(error){
			console.log(error);
		});
	};
	
});
