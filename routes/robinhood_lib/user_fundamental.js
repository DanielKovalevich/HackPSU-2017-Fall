var db = require('../../database/database.js');

function getUserStockStatus(callback) {

    //Query the SQL database and find out how much money the user currently has
    var query = "SELECT AvailableMoney, InvestedMoney FROM usertable WHERE (id = " + 1 + ");";

    db.get(query, (rows, fields) => {
        console.log("SQL Response from insert request: " + rows);

        //Turn the account balances into a jsonObject
        var jsonResponse = {

            AvailableMoney: rows[0].AvailableMoney,
            InvestedMoney: rows[0].InvestedMoney
        };
        
        callback(jsonResponse);

    });
}


