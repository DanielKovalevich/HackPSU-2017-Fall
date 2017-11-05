var db = require('database.js');

function getAccountTotal(uid, callback) {
    var query = "SELECT AvailableMoney, InvestedMoney FROM usertable WHERE (id = " + uid + ");";
    
    db.get(query, (rows, fields) => {
        console.log("SQL Response from insert request: " + rows);

        callback(rows);
    });
}