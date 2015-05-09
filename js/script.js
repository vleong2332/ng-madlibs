angular.module('madLibs', [])
	.controller('madLibsCtrl', function($scope) {
		$scope.gender = "M";
		$scope.firstPro = "he";
		$scope.secondPro = "him";
		$scope.possPro  = "his";
		$scope.changeToMale = function() {
			$scope.firstPro = "he";
			$scope.secondPro = "him";
			$scope.possPro  = "his";
		};
		$scope.changeToFemale = function() {
			$scope.firstPro = "she";
			$scope.secondPro = "her";
			$scope.possPro  = "her";
		};
		$scope.name = "Vicky Leong";
		$scope.jobTitle = "";
		$scope.tediousTask = "";
		$scope.dirtyTask = "";
		$scope.celebrity = "";
		$scope.uselessSkill = "";
		$scope.obnoxCeleb = "";
		$scope.hugeNumber = "";
		$scope.adjective = "";
	});