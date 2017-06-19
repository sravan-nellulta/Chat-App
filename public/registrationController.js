var regController = angular.module('registerControllerModule',[]);
regController.controller('regController',['$scope','sampleService','$state','AuthToken',function($scope,sampleService,$state,AuthToken){
    console.log('hai');
    $scope.saveRegistration = function(){
        console.log($scope.registration);
        sampleService.postRegistration($scope.registration).then(
            function(res){
                if(res.data.success == true){
                    if($state.current = 'register'){
                        console.log(res);
                    $state.go('otp');}
                    if($state.current = 'otp' && $scope.registration.otp && res.data.data !== null){
                        console.log(res);
                        AuthToken.setToken(res.data.token);
                        $state.go('success');}

                }
            },
            function(err){
                if(err){
                    console.log(err);
                }
            }
        )
    };
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log(file );
        console.dir(file);
        var uploadUrl = "/fileUploadImage/imageUpload";
        sampleService.sendFile(file, uploadUrl)
            .then(function(res){
                if(res.data.success == true) {
                    $scope.uploadImage = res.data.image;
                    console.log(res);
                }
            });
    };
}]);

regController.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
