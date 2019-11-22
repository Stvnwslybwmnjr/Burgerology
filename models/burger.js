var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(vals, cb) {
      console.log("burger.js vals", vals);
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
