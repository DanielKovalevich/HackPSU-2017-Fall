var db = require('./database.js');

function setUserInvestedMoney(uid, InvestedMoney) {

    var query = "UPDATE usertable SET InvestedMoney = " + InvestedMoney + " WHERE id = " + uid + ";";

    db.get(query, (rows, fields) => {

        console.log("updating InvestedMoney into usertable");
    })

    //While we are here, we are also going to set the net profit variable as well
}

function setUserAvailableMoney(uid, AvailableMoney) {

    var query = "UPDATE usertable SET AvailableMoney = " + AvailableMoney + " WHERE id = " + uid + ";";

    db.get(query, (rows, fields) => {

        console.log("Updating AvailableMoney into usertable");
    })
}

function createUser(username, password, FirstName, LastName, email, startingMoney) {

    var query = "INSERT INTO usertable (username, password, FirstName, LastName, email, StartingMoney, AvailableMoney) VALUES "
    + username + "," + password + "," + FirstName + "," + LastName + "," + email + "," + StartingMoney + "," + StartingMoney + ");";

    db.get(query, (rows, fields) => {

        console.log("Creating new user in database");
    })
}

//Treat this as a private function
function getAccountTotalInternal(uid, callback) {

    var query = "SELECT AvailableMoney, InvestedMoney FROM usertable WHERE (id = " + uid + ");";

    db.get(query, (rows, fields) => {
        console.log("SQL Response from insert request: " + rows);

        //Send this back to the user somehow
        var totalAccountBalance = rows[0].AvailableMoney + rows[0].InvestedMoney;
        callback(totalAccountBalance);

    });

}


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