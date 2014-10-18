'use strict';
/**
 * @class Application Controller
 * @name Application
 * @description Controller with re-usable functions for all controllers
 **/
var Application = function() {

    /**
     * @property model
     * @name model
     * @type String
     * @memberof Application
     * @description Property will be overriden on each controller. Used to DRY code
     *              on common used functions on Application controller
     **/
    this.model = '';

    /**
     * @property respondWith
     * @name respondWith
     * @type Array
     * @memberof Application
     **/
    this.respondsWith = ['json'];

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
     * @name index
     * @memberof Application
     * @function
     * @description c<b>R</b>ud Used for request to GET /resource, override it
     *              on each controller to work with different behaviour
     * @example
     *      curl http://localhost:4000/users
     **/
    this.index = function( /*req, resp, params*/ ) {
        var self = this;

        geddy.model[this.model].all(function(err, models) {
            self.send(err ? 500 : 200, err ? 'Error' : models);
        });
    };

    /**
     * @name show
     * @description c<b>R</b>ud GET /:resource/:id
     * @memberof Application
     * @function
     * @example
     *      curl http://localhost:4000/users/6D35C61D-2E3B-465E-990B-217CF60E357C
     **/
    this.show = function(req, resp, params) {
        return this.load(params.id);
    };

    /**
     * @name create
     * @description <b>C</b>rud Create a model based on params
     * @memberof Application
     * @function
     * @example
     *      curl -H "Content-Type: application/json" -d '{"email":"l@l.com"}' \
     *      http://localhost:4000/users'
     **/
    this.create = function(req, resp, params) {
        var properties = this.allowedParams(params);
        var model = geddy.model[this.model].create(properties);
        return this.saveModel(model);
    };

    /**
     * @name update
     * @memberof Application
     * @function
     * @description cr<b>U</b>d Update model based on allowed params
     * @example
     *      curl -H "Content-Type: application/json" -d '{"email":"l@l.co"}' \
     *      -X PUT \
     *      http://localhost:4000/users/6D35C61D-2E3B-465E-990B-217CF60E357C'
     **/
    this.update = function(req, resp, params) {
        var self = this;
        var after = function(model) {
            model.updateProperties(params);
            self.saveModel(model);
        };

        return this.load(params.id, after);
    };

    /**
     * @name remove
     * @memberof Application
     * @function
     * @description cru<b>D</b> Delete user based on id, DELETE /:resource/:id
     * @example
     *      curl -X DELETE "http://localhost:4000/users/6D35C61D-2E3B-217CF60E357C"
     **/
    this.remove = function(req, resp, params) {
        var self = this;
        var modelName = this.model;

        var after = function(model) {
            geddy.model[modelName].remove(params.id, function(err) {
                return self.send(err ? 500 : 200, err ? 'Error' : model);
            });
        };

        return this.load(params.id, after);
    };

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

    /**
     * @name saveModel
     * @memberof Application
     * @function
     * @description Validate model, then save, then return callback or send object
     * @param {Object} model Object to be saved
     * @param {Function} callback Function to be executed after success save model
     **/
    this.saveModel = function(model, callback) {
        if (!model.isValid()) {
            return this.send(422, model.errors);
        }
        var self = this;
        var after = function(err, data) {
            if (err) {
                console.log(err);
                return self.send(500, 'Error');
            }
            return callback ? callback(data) : self.send(200, model);
        };
        model.save(after);
    };

    /**
     * @name load
     * @description Load a model based on id, using this.model as model name
     * @function
     * @memberof Application
     * @param {String} id model.id
     * @param {Function} callback function to be executed after load model
     **/
    this.load = function(id, callback) {
        var self = this;
        var after = function(err, model) {
            if (err) {
                console.log(err);
                return self.send(500, 'Error');
            }
            if (!model) {
                return self.send(404, {});
            }
            /**
             * If callback is provided, then execute it, otherwise, return model
             **/
            return callback ? callback(model) : self.send(200, model);
        };
        return geddy.model[this.model].first(id, after);
    };

    /**
     * @name allowedParams
     * @description Given model, and params, check model properties agains params
     * @memberof Application
     * @function
     * @param  {Object} params
     * @return {Object}        allowed object from params
     **/
    this.allowedParams = function(params) {
        /**
         * Get model properties, based on current value for this.model
         **/
        var options = geddy.model.descriptionRegistry[this.model].properties;
        var properties = Object.keys(options);
        var content = {};

        /**
         * For each property of current model, look for param and set value to new
         * object
         **/
        properties.map(function(property) {
            /**
             * If params object contains a property wit a value, then add it to
             * content object
             **/
            if (params[property]) {
                content[property] = params[property];
            }
        });
        return content;
    };
};

exports.Application = Application;
