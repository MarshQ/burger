var orm = require("../confirm/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(columns, values, cb) {
        orm.create("burgers", columns, values, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, conditions, cb) {
        orm.update("burgers", objColVals, conditions, function(res) {
            cb(res);
        });
    },
    // delete: function(conditions, cb) {
    //     orm.delete("burgers", conditions, function(res) {
    //         cb(res);
    //     })
    // }
};

module.exports = burger;