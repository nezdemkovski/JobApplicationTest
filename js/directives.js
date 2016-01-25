(function() {
    angular.
    module('application-directives', [])

    .directive('loginTab', function() {
        return {
            restrict: 'E',
            templateUrl: 'tabs/login-tab.html'
        };
    })

    .directive('registrationTab', function() {
        return {
            restrict: 'E',
            templateUrl: 'tabs/registration-tab.html'
        };
    });
})();