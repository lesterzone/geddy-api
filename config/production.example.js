/**
 * @namespace
 * @name Production
 * @description Configuration Example for production
 **/
var config = {

    /**
     * @type string
     * @memberof Development
     * @description name for this project under production environment
     **/
    appName: 'Geddy Based API',

    /**
     * @type string
     * @memberof Production
     * @description display errors?
     * @default false
     **/
    detailedErrors: false,

    /**
     * @type string
     * @memberof Production
     * @description host name for this project under production
     **/
    hostname: null,

    /**
     * @type String
     * @memberof production
     * @default 4000
     * @description port to run this project on production
     **/
    port: 4000,

    /**
     * @type Object
     * @memberof Production
     * @description Model to be used, define database adapter
     **/
    model: {
        defaultAdapter: 'mongo'
    },

    /**
     * @type string
     * @memberof Production
     * @description MongoDB configuration for adapter defined on @property model
     **/
    db: {
        mongo: {
            username: null,
            dbname: 'geddy_api',
            prefix: null,
            password: null,
            host: 'localhost',
            port: 27017
        }
    }
};

module.exports = config;
