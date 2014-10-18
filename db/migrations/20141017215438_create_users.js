var CreateUsers = function() {
    this.up = function(next) {
        var def = function(t) {
            t.column('email', 'string');
        };

        var callback = function(err, data) {
            if (err) {
                return throw err;
            }
            return next();
        };
        this.createTable('user', def, callback);
    };

    this.down = function(next) {
        var callback = function(err, data) {
            if (err) {
                throw err;
            } else {
                next();
            }
        };
        this.dropTable('user', callback);
    };
};

exports.CreateUsers = CreateUsers;
