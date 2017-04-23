var ownApp =  angular.module("ownApp",[]);
ownApp.controller("bodycontroller",function($scope){
$scope.names=[];
    $scope.add1=function(){
        $scope.names.push($scope.Addedname);
        $scope.Addedname = "";
        };  
    $scope.remove=function(){
		$scope.names.splice(0,1);
		
		};		
   
 });
 