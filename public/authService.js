angular.module('authServiceModule', [])
    .factory('AuthToken', ['$window', function ($window) {
        var authFactory = {};
        var tokenKey = "token";

        authFactory.getToken = function () {

            return $window.localStorage.getItem(tokenKey);
        };
        authFactory.setToken = function (token) {
            if (token) {
                $window.localStorage.setItem(tokenKey, token);
            }
            // else{$window.localStorage.removeItem(tokenKey);}
        };
        return authFactory;
    }]);