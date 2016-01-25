describe('Login Controller test suite', function() {
 	beforeEach(module('JobApplicationTest'));

	var scope;

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		$controller('loginController as vm', {$scope: scope});
	}));

	describe('Function checkUser', function () {
        it('Incorrect user, should return false', function () {
			var testUser = {email: 'some@email.com', password: 'somepassword'};
			expect(scope.vm.checkUser(testUser)).toBe(false);
        }); 

        it('Correct user, should return true', function () {
			var testUser = {email: 'john@doe.com', password: 'johndoe'};
			expect(scope.vm.checkUser(testUser)).toBe(true);
        }); 
    });
});