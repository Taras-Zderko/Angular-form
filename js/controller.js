var app = angular.module('mainApp', ['ngRoute']);

app.confog(function ($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl : 'index.html'
	})
	.when('/task',{
		templateUrl : 'task.html'	
	})

}); 

app.controller("loginController", function($scope, $location){

	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;
		if ($scope.username == "admin" && $scope.password == "admin") {
				$location.path("/task");
		} else {
			aleart("wtf!!!????");
		}
	};
});