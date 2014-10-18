'use strict';
/**
 * @class
 * @name User
 * @description User Model
 **/
var User = function() {
    this.defineProperties({
        email: {
            type: 'string',
            required: true
        }
    });
};

User = geddy.model.register('User', User);
