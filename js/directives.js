(function() {
    var app = angular.module('application-directives', []);

    app.directive('loginTab', function() {
        return {
            restrict: 'E',
            templateUrl: 'tabs/login-tab.html'
        };
    });

    app.directive('registrationTab', function() {
        return {
            restrict: 'E',
            templateUrl: 'tabs/registration-tab.html'
        };
    });

    app.directive('successRegistration', function() {
        return {
            restrict: 'E',
            templateUrl: 'tabs/success-registration.html'
        };
    });
})();