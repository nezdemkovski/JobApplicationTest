(function() {
    angular.module('JobApplicationTest').controller('loginController', ['users', function(users) {
        var vm = this;

        vm.isSubmitClicked = false;

        vm.checkUser = function(user) {
            var ifExists = false;

            angular.forEach(users, function(value, key) {
                if (user.email === value.email && user.password === value.password) {
                    ifExists = true;
                }
            });

            return ifExists;
        };

        vm.login = function(userEmail, pwd) {
            var newUser = {email: userEmail, password: pwd};
            vm.isSubmitClicked = true;

            if (vm.checkUser(newUser)) {
                vm.currUser = newUser;
            }
        }
    }]);
})();