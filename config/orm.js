var connection = require("./connection.js");
console.log("check check connection")
var orm = {
  selectAll: function(tableName, cb) {
    console.log(tableName)
    // sqlQuery = `SELECT * FROM ${tableName};`;
    sqlQuery = `SELECT * FROM ${tableName};`;
    connection.query(sqlQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function(table, col, value, cb) {
    console.log("orm value: ", value);
   var sqlQuery = `INSERT INTO ${table} (${col}) VALUES ('${value}')`;
   connection.query(sqlQuery, function(err, res) {
    // var sqlQuery = `INSERT INTO ? (??) VALUES (?)`; [table, col, value],
    // connection.query(sqlQuery,  function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function(table, burgerName, id, cb) {
    var sqlQuery = `UPDATE ${table} SET burger_name = ${burgerName} WHERE id = ${id};`;
    connection.query(sqlQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

module.exports = orm;
