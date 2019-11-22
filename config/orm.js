var connection = require("./connection.js");
console.log("check check connection")

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

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
  // updateOne: function(id, cb) {
  //   var sqlQuery = `UPDATE burgers SET devoured = true WHERE id = 1;`;
  //   connection.query(sqlQuery, function(err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(res);
  //   });
  // }
  updateOne: function(table, objColVals, condition, cb) {
    console.log("orm hit")
		// Construct the query string that updates a single entry in the target table
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	}
};

module.exports = orm;
