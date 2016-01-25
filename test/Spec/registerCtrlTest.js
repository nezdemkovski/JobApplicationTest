describe('RegisterFormController test suite', function() {
	beforeEach(module('JobApplicationTest'));

	var scope;

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		$controller('registrationFormController as vm', {$scope: scope});
	}));

	describe('Function submit', function () {
		var isValid = false;

		it('Incorrect validation, should return false', function () {
			scope.vm.submit(isValid);
			expect(scope.vm.isSuccess).toBe(false);
		});

		it('Correct validation, should return true', function () {
			isValid = true;
			scope.vm.submit(isValid);
			expect(scope.vm.isSuccess).toBe(true);
		}); 
	});
});