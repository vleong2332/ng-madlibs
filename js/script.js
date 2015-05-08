angular.module('madLibs', [])
	.constant('VERSION', 1.1)
	.controller('madLibsCtrl', function(VERSION, $scope) {
		$scope.version = VERSION;
	});