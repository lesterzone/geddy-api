/**
 * Geddy Configuration for development environment
 **/
var config = {
    appName: 'Geddy Based API (development)',
    detailedErrors: true,
    debug: true,

    /**
     * Watch only those files that affect API files
     **/
    watch: {
        files: [
            '/config', '/app/controllers', '/app/models'
        ],
        includePattern: '\\.(js)$',
        excludePattern: '\\.git|node_modules'
    },
    hostname: null,
    port: 4000,

    /**
     * For now we are going to use default configuration, later on we will add
     * support for Database
     **/
    model: {
        defaultAdapter: 'filesystem'
    },

    /**
     * This is an API, we dont need sessions
     **/
    sessions: null
};

module.exports = config;
