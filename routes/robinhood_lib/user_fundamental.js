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

function getNumberOfStocksInvested(callback) {

    //Query the SQL database to find out this number - Hardcoding in the userid for the time being
    var query = "SELECT UniqueStockAmount from usertable WHERE id = 1";

    db.get(query, (rows, fields) => {

        var jsonResponse = {
            
            UniqueStocks : rows[0].UniqueStockAmount

        };

        callback(jsonResponse);
    })
}


