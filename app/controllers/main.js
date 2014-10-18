'use strict';
/**
 * @class Main Controller
 * @extends Application
 * @name Main
 **/
var Main = function() {

    /**
     * @name index
     * @function
     * @memberof Main
     **/
    this.index = function(req, resp, params) {

        this.send(200, params);
    };
};

exports.Main = Main;
