var mysql = require('mysql');

var db = exports = module.exports = {};

/*
@return rows and fields of whatever query you do. 

Sample usage:
----------------------------------------------
var db = require('../database/database.js');

var query = 'SELECT * FROM UserTable';

db.get(query, (rows, fields) => {
	console.log(rows);
});
----------------------------------------------
*/
db.get = function(query, callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'admin',
        database : 'game'
      });
    connection.connect();

    connection.query(query.toString(), function (err, rows, fields) {
        if (err) throw err;
    
        console.log(rows);
        callback(rows, fields);    
    });

    connection.end();
}