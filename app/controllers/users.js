/**
 * @class
 * @name Users Controller
 * @description User Model
 **/
'use strict';
var Users = function () {

    /**
     * @property model
     * @description property to be used on Application controller for reusable
     *              functions
     * @memberof User
     **/
    this.model = 'User';

    /**
     * Each of the following functions are defined on Application controller.
     * Override each one if you need a different behabiour.
     * this.index
     * this.show
     * this.create
     * this.update
     * this.remove
     **/
};

exports.Users = Users;
