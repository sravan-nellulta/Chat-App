var regController = angular.module('registerControllerModule',[]);
regController.controller('regController',['$scope','sampleService',function($scope,sampleService){
    console.log('hai');
    $scope.saveRegistration = function(){
        console.log($scope.registration);
        sampleService.postRegistration($scope.registration).then(
            function(res){
                if(res.success == true){
                    console.log(res);
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