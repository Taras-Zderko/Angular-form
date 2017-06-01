var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
	
	$scope.newTask = {};
	$scope.clickedTask = {};
	$scope.message="";

	$scope.tasks = [
		
	];

	$scope.saveTask = function(){

		$scope.tasks.push($scope.newTask);
		$scope.newTask = {};
		$scope.message="New tast added successfully";		
	};

	$scope.selectTask = function(task){

		$scope.clickedTask = task;
	};

	$scope.updateTask = function(){

		$scope.message="Tast was updated successfully";
	};

	$scope.deleteTask = function(){

		$scope.tasks.splice($scope.tasks.indexOf($scope.clickedTask), 1);
		$scope.message="Tast was deleted successfully";
	};

	$scope.clearMessage = function(){
		
		$scope.message="";
	};
});

