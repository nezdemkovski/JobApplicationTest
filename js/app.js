(function() {
    var app = angular.module('JobApplicationTest', ['application-directives', 'validation.match']);

    app.constant('users', [
        { email: 'john@doe.com', password: 'johndoe' },
        { email: 'contact@yakovlevyuri.com', password: 'yakovlevyuri' },
        { email: 'test@email.com', password: 'test' }
    ]);

    app.controller('PanelController', function() {
        var vm = this;
        vm.tab = 1;

        vm.selectTab = function(setTab) {
            vm.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return vm.tab === checkTab;
        }
    });

    app.controller('registrationFormController', function() {
        var vm = this;

        vm.message = "";
        vm.isSubmitClicked = false;

        vm.credentials = {
            email: "",
            password: ""
        };

        vm.submit = function(isValid) {
            vm.isSubmitClicked = true;
            vm.isSuccess = false;

            if (isValid) {
                vm.message = "New user with email " + this.credentials.email + " was created. Congratulations.";
                vm.isSuccess = true;
            } else {
                vm.message = "There are still invalid fields below";
            }
        };
    });
    
     app.controller('loginController', ['users', function(users) {
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