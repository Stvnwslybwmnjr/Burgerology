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
 // updateOne: function(col, )
};

module.exports = burger;
