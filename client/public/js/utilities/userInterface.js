var db = require('./database.js');

//Treat this as a private function
function getUserByUsername(username, callback) {

    var query = "SELECT * FROM usertable WHERE username = \"" + username + "\";";

    db.get(query, (rows, fields) => {
        console.log("SQL Response from user select` request: " + rows);

        var userEntry = {
            username : rows[0].username,
            password : rows[0].password,
            firstName: rows[0].FirstName,
            lastName: rows[0].LastName,
            startingMoney: rows[0].StartingMoney,
            availableMoney: rows[0].AvailableMoney,
            investedMoney: rows[0].InvestedMoney,
            netProfit: rows[0].NetProfit,
            uniqueStockAmount: rows[0].UniqueStockAmount,
            totalShares: rows[0].totalShares
        };

        callback(userEntry);

    });

}