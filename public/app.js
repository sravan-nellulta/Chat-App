var app = angular.module('newApp',['ui.router','registerControllerModule','registrationServiceModule','authServiceModule']);
app.config(function($stateProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$stateProvider
	.state('register',{
		url : '/register',
		templateUrl:'register.html',
		controller : 'regController'
	})
			.state('otp',{
				url :'/otp',
				templateUrl:'otp.html',
				controller : 'regController'
			})
			.state('success',{
				url :'/success',
				templateUrl:'success.html',
				controller : 'regController'
			})
	
	
	
});