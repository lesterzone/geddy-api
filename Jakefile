'use strict';

/**
 * Namespace to run some componnents of the API
 * @ref http://jebchit.info/pr/browse.php/Oi8vamFr/ZWpzLmNv/bS9kb2Nz/b5/
 * @return {Object}
 */
namespace('tests', function() {

    var Mocha = require('mocha');
    var fs = require('fs');
    var scope = {};
    var mocha, runTests;

    mocha = new Mocha({
        reporter: 'spec',
        ui: 'bdd',
        timeout: '10000'
    });

    geddy.testing = true;

    /**
     * Function reused to run tests from models and controllers tasks.
     * @return {Function}
     */
    runTests = function() {
        mocha.options.ignoreLeaks = true;
        mocha.run();
    };

    /**
     * Helpers to be reused on similar tests
     */
    mocha.addFile('test/config.js');

    /**
     * Do not require chai and set chai's properties to scope variables on any
     * test.
     * global.should = chai.should();
     * global.assert = chai.assert;
     */
    global.chai = require('chai');

    /**
     * TODO: research about assigning this as global is bad or acceptable
     */
    global.expect = chai.expect;
    global.should = chai.should;

    scope.readFiles = function(path, target) {
        var after = function(file) {

            if (!target) {
                return mocha.addFile(path + file);
            }

            if (file.toLowerCase().replace('.js', '') === target) {
                return mocha.addFile(path + file);
            }
        };

        fs.readdirSync(path).filter(after);
    };

    desc('Run all model\' tests');
    task('models', function(model) {
        scope.readFiles('test/unit/models/', model);
        return runTests();
    });

    desc('Run all controller\'s unit tests');
    task('controllers', function(controller) {
        scope.readFiles('test/unit/controllers/', controller);
        return runTests();
    });

    desc('Test all controller actions, a running instance is required');
    task('integration', function(controller) {
        scope.readFiles('test/integration/controllers/', controller);
        return runTests();
    });

    task('unit', function() {
        scope.readFiles('test/unit/models/');
        scope.readFiles('test/unit/controllers/');
        return runTests();
    });

});

task('integration', function() {
    jake.Task['tests:integration'].invoke();
});

task('jshint', function(path) {
    var cmd = 'jshint --reporter node_modules/jshint-stylish/stylish.js ';
    var opt = path ? path : 'app/ config/ test/';
    var after = function() {
        console.log('Your ' + opt + ' has ben js-hinted! :D');
        complete();
    };
    jake.exec(cmd + opt, {
        printStdout: true,
        interactive: true
    }, after);
});
