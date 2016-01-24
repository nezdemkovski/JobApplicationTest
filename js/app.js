(function() {
    var app = angular.module('JobApplicationTest', ['application-directives', 'validation.match']);

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller('registrationFormController', function() {
        this.message = "";

        this.credentials = {
            email: "",
            password: ""
        };

        this.submit = function(isValid) {
            if (isValid) {
                this.message = "New user with email " + this.credentials.email + " was created. Congratulations.";
            } else {
                this.message = "There are still invalid fields below";
            }
        };
    });
})();