'use strict';
describe('User Model', function() {

    describe('Defaults', function() {
        TestHelpers.modelDefaults('User', [{
            name: 'email',
            datatype: 'string'
        }]);
    });

    describe('Custom Validations', function() {
        beforeEach(function(done) {
            this.model = geddy.model.User.create();
            done();
        });

        it('Add something here', function() {});
    });

    TestHelpers.modelValidations('User', ['email']);

    var inf = {
        email: 'l@l.com'
    };

    TestHelpers.validModel('User', inf);
});
