var app = angular.module('newApp',['ngRoute','registerControllerModule','registrationServiceModule']);
app.config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/register',{
		templateUrl:'register.html',
		controller : 'regController'
		
	})
	
	
	
});