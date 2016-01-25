(function() {
    angular.module('JobApplicationTest').controller('registrationFormController', function() {
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
})();