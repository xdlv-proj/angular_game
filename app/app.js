'use strict';
var App = angular.module('ParkStation', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'view/home/home.html',
		controller: 'HomeCtrl'
	}).otherwise({
		redirectTo: '/home'
	});
}]);