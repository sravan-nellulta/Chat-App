var app = angular.module('registrationServiceModule',[]);
app.factory('sampleService',function($http){
	var register = {};
	register.postRegistration = function(registerData){
		console.log(registerData);
		return $http.post('/register/save',registerData);
	};
	register.sendFile = function(fileData){
		console.log(fileData.name);
		return $http.post('/upload',{data:fileData.name});
	};
	register.sendFile = function(file, uploadUrl){
		console.log(file, uploadUrl);
		var fd = new FormData();
		fd.append('fileUpload', file);
		console.log(fd);
		return $http.post(uploadUrl,fd, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		} )

	};

	return register;

});
