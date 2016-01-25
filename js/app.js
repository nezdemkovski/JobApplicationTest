(function() {
    angular
        .module('JobApplicationTest', ['application-directives', 'validation.match'])
        .constant('users', [
            { email: 'john@doe.com', password: 'johndoe' },
            { email: 'contact@yakovlevyuri.com', password: 'yakovlevyuri' },
            { email: 'test@email.com', password: 'test' }
        ]);
})();