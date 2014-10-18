'use strict';
/**
 * @class Application Controller
 * @name Application
 **/
var Application = function() {

    /**
     * @property respondWith
     * @name respondWith
     * @type Array
     * @memberof Application
     **/
    this.respondWith = ['json'];

    /**
     * @description Set CORS
     * @name before
     * @function
     * @memberof Application
     **/
    this.before(function() {
        var resp = this.response;
        var inf = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, authtoken',
            'Access-Control-Max-Age': 5184000 //2 months
        };

        /**
         * Set headers
         **/
        resp.setHeaders(200, inf);

        if ('OPTIONS' === this.request.method) {
            resp.finish();
            return;
        }
    });

    /**
     * @description Express <b>like</b> send function, returns a json response
     * @name send
     * @function
     * @memberof Application
     **/
    this.send = function(code, data) {
        this.respond(data, {
            statusCode: code
        });
    };
};

exports.Application = Application;
