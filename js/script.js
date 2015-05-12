var App = angular.module('madLibs', ['ngMessages', 'ngAnimate']);
App.controller('madLibsCtrl', function($scope) {
	$scope.view = "words";

	$scope.gender = "M";
	$scope.firstPro  = "he";
	$scope.secondPro = "him";
	$scope.possPro   = "his";

	$scope.changeToMale = function() {
		$scope.firstPro  = "he";
		$scope.secondPro = "him";
		$scope.possPro   = "his";
	};
	$scope.changeToFemale = function() {
		$scope.firstPro  = "she";
		$scope.secondPro = "her";
		$scope.possPro   = "her";
	};

	$scope.name         = "";
	$scope.jobTitle     = "";
	$scope.tediousTask  = "";
	$scope.dirtyTask    = "";
	$scope.celebrity    = "";
	$scope.uselessSkill = "";
	$scope.obnoxCeleb   = "";
	$scope.hugeNumber   = "";
	$scope.adjective    = "";

	$scope.submitWords = function() {
		if ($scope.madlibsWords.$valid) {
			// console.log("form is valid");
			$scope.view = "story";
		}
		else {
			console.log('form is invalid');
		}
	};

	$scope.startOver = function() {
		console.log('starting over');
		$scope.view         = "words";
		$scope.gender       = "M"; 
		$scope.firstPro     = "he";
		$scope.secondPro    = "him";
		$scope.possPro      = "his";
		$scope.name         = "";
		$scope.jobTitle     = "";
		$scope.tediousTask  = "";
		$scope.dirtyTask    = "";
		$scope.celebrity    = "";
		$scope.uselessSkill = "";
		$scope.obnoxCeleb   = "";
		$scope.hugeNumber   = "";
		$scope.adjective    = "";
	}
});