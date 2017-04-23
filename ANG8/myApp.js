
var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(function($routeProvider) {
    $routeProvider
        .when("/emp", {
            templateUrl : "emp.html",
            controller: "MyControlleremp"
        })
        .when("/dep", {
            templateUrl : "dep.html",
            controller: "MyControllerdep"
        })
        .when("/pro", {
            templateUrl : "pro.html",
            controller: "MyControllerpr"
        })
        .otherwise({
            redirectTo: '/emp'
    });
});

myApp.factory("ServerData", function ($http, $q) {
    var serviceObject = {};
    serviceObject.getDepartments = function () {
        var deferred = $q.defer();
        var url = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/departments";
        $http.get(url).then(function (response) {
            deferred.resolve(response.data.data);
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    serviceObject.saveNewDepartment = function (pid, pname) {
        var deferred = $q.defer();
        var url = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/createDepartment";
        var data = {
            id: pid,
            name: pname
        };
        $http.post(url, data).then(function(resp){
            deferred.resolve(true);
        }, function(error){
            deferred.reject(false);
        });

        return deferred.promise;
    };
    return serviceObject;
});

myApp.controller("MyControllerdep", function($scope, $http, ServerData){
    $scope.getDeps = function () {
        var promiseForDepartments = ServerData.getDepartments();
        promiseForDepartments.then(function (data) {
            $scope.jsondata = data;
        }, function (err) {
            console.log(err);
        });
    };

    $scope.getDeps(); // Get the departments on initial load

    /* SHOW */

    $scope.show = function(dep){
        $scope.showdepartment = dep;
    };

    /* NEW */

    $scope.saveNew = function () {
        var promiseForSaveNew = ServerData.saveNewDepartment($scope.newDepId, $scope.newDepName);
        promiseForSaveNew.then(function (result) {
            console.log("saveNewDepartment success: " + JSON.stringify(result));
            $scope.getDeps();
        }, function (err) {
            console.log("saveNewDepartment error: " + JSON.stringify(err));
        });
        /*
        $http.post(url, data).then(function(resp){

            console.log("Success: ", resp);

            $scope.getDeps(); // reload departments from API after adding new


            // Clearing the form fields

            $scope.newDepId = "";
            $scope.newDepName = "";

        }, function(error){
            console.log("Error: ", error);
        });
        */
    };

    /* DELETE */

    $scope.opendelete = function (dep) {
        $scope.deleteCandidate = dep;
    }

    $scope.delete = function() {
        var url = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/deleteDepartment";
        var data = {
            id: $scope.deleteCandidate.id
        };
        $http.post(url, data).then(function(resp){
            console.log("Success: ", resp);

            $scope.getDeps(); // reload departments from API after delete

        }, function(error){
            console.log("Error: ", error);
        });
    }

    /* EDIT */

    $scope.openedit = function (dep) {

        // We create a copy, because otherwise the editing before saving would already change the department in the scope
        // This would be even the case, if the fields were altered but Cancel would be clicked

        $scope.depUnderEdit = angular.copy(dep);

    }

    $scope.saveEdit = function () {
        var url = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/updateDepartment";
        var data = {
            id: $scope.depUnderEdit.id,
            name: $scope.depUnderEdit.name
        };
        $http.post(url, data).then(function(resp){
            console.log("Success: ", resp);

            $scope.getDeps(); // reload departments from API after delete

            // Reset the temporary department under editing to an empty object

            $scope.depUnderEdit = {};

        }, function(error){
            console.log("Error: ", error);
        });
    }

});

myApp.controller("MyControlleremp", function($scope, $http){

    var url = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/employees";

    $http.get(url).then(function(response) {
            $scope.jsondata = response.data;
            console.log($scope.jsondata);
        },
        function(error){
            console.log(error);
        });

    // Show

    $scope.show = function(employee){
        $scope.showemployee = employee;
    };

});

myApp.controller("MyControllerpr", function($scope, $http){

    var url = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/projects";

    $http.get(url).then(function(response) {
            $scope.jsondata = response.data.data;
            console.log($scope.jsondata);
        },
        function(error){
            console.log(error);
        });

    $scope.show = function(project){
        $scope.showproject = project;
    };
});
