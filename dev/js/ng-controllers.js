'use strict';

var app = angular.module('app.controllers', []);

app.controller('BaseController', ['$scope', '$state',
	function($scope, $state)
	{
		$scope.$state = $state;
	}
]);

app.controller('HomeController', ['$scope',
	function($scope)
	{
		$scope.state = false;
		$scope.toggle = function(val) {
			$scope.state = val;
		}
	}
]);