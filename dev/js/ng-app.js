'use strict';

var app = angular.module('app', [
	'ui.router', 
	'ngResource', 
	'app.directives',
	'app.filters',
	'app.controllers'
]);


app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url : '/',
				templateUrl : 'partials/home.html',
				controller : 'HomeController'
			});
	}
]);