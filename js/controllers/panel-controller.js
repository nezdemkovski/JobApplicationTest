(function() {
    angular.module('JobApplicationTest').controller('PanelController', function() {
        var vm = this;
        vm.tab = 1;

        vm.selectTab = function(setTab) {
            vm.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return vm.tab === checkTab;
        }
    });
})();