'use strict';
var TestHelpers = {},
    Scope = {
        api: 'http://localhost:4000/',
        options: {
            timeout: 1000,
            headers: {
                authtoken: ''
            }
        }
    };

TestHelpers.modelDefaults = function(model, properties) {
    var defaults = geddy.model.descriptionRegistry[model].properties;
    properties.map(function(opt) {
        describe(opt.name, function() {
            Scope.singleProperty(opt, defaults);
        });
    });
};

TestHelpers.modelValidations = function(model, validations) {

    describe('Default Validations', function() {
        beforeEach(function(done) {
            this.model = geddy.model[model].create();
            done();
        });

        validations.map(function(opt) {
            it('should be invalid without ' + opt, function() {
                expect(this.model.isValid()).to.be.equal(false);
            });
        });
    });
};

TestHelpers.validModel = function(modelName, inf) {
    var model = geddy.model[modelName].create(inf);
    describe('Valid Model', function() {
        it('should be valid with all required properties', function() {
            if (!model.isValid()) {
                console.log(model.errors);
            }
            expect(model.isValid()).to.be.equal(true);
        });
    });
};

TestHelpers.controllerDefaults = function(controller, defaults) {

    defaults.map(function(opt) {
        describe(opt, function() {
            var obj;

            beforeEach(function(done) {
                obj = new geddy.controller[controller]();
                done();
            });

            it('should have an ' + opt + ' function', function() {
                expect(obj[opt]).to.be.a('function');
            });
        });
    });
};

Scope.singleProperty = function(opt, defaults) {
    it('name should be ' + defaults[opt.name].name, function() {
        expect(opt.name).to.be.equal(defaults[opt.name].name);
    });

    it('datatype should be ' + defaults[opt.name].datatype, function() {
        expect(opt.datatype).to.be.equal(defaults[opt.name].datatype);
    });
};

global.TestHelpers = TestHelpers;
