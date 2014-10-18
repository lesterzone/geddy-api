/**
 * @namespace
 * @name Development
 * @description Geddy Configuration for development environment
 **/
var config = {

    /**
     * @type String
     * @memberof Development
     * @description Name for this project under development environment
     **/
    appName: 'GeddyJS Based API (Dev)',

    /**
     * @type Boolean
     * @memberof Development
     * @default true
     * @description Display full error messages or not?
     **/
    detailedErrors: true,

    /**
     * @type Boolean
     * @memberof Development
     * @default true
     * @description enable debug mode?
     **/
    debug: true,

    /**
     * @type Object
     * @memberof Development
     * @description Watch only those files that affect API file
     **/
    watch: {
        files: [
            '/config', '/app/controllers', '/app/models'
        ],
        includePattern: '\\.(js)$',
        excludePattern: '\\.git|node_modules'
    },

    /**
     * @type null
     * @memberof Development
     * @default null
     * @description Which host name is used?
     **/
    hostname: null,

    /**
     * @type Integer
     * @memberof Development
     * @default 4000
     * @description Port number to be used on development
     **/
    port: 4000,

    /**
     * @type Object
     * @memberof Development
     * @description For now we are going to use default configuration,
     *              later on we will add support for Database
     **/
    model: {
        defaultAdapter: 'filesystem'
    },

    /**
     * @type null
     * @memberof Development
     * @description This is an API, we don't need sessions
     **/
    sessions: null
};

module.exports = config;
