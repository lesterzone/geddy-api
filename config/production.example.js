var config = {
    appName: 'Geddy Based API',
    detailedErrors: false,
    hostname: null,
    port: 4000,
    model: {
        defaultAdapter: 'mongo'
    },
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
