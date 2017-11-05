var db = require('./database.js');


//Treat this as a private function
function getOwnedStockBySymbol(uid, symbol, callback) {

    var query = "SELECT * FROM gametable WHERE uid = " + uid + " && symbol = \"" + symbol + "\";";

    db.get(query, (rows, fields) => {
        console.log("SQL Response from insert request: " + rows);

        callback(rows[0].buyPrice, rows[0].stockAmount, rows[0].purchaseDate, rows[0].purchaseTime);

    });

}

function getAllOwnedStocks(uid, callback) {

    var query = "SELECT * FROM gametable WHERE uid = " + uid + ";";
    db.get(query, (rows, fields) => {
        
        //Create an empty array for each of the objects available -- Prepare for formatting
        var stockList = [];

        for(i = 0; i < rows.length; i++) {

            var stockObject = {
                buyPrice: rows[0].buyPrice,
                stockAmount: rows[0].stockAmount,
                purchaseDate: rows[0].purchaseDate,
                purchaseTime: rows[0].purchaseTime
            };

            stockList[i] = stockObject;
        }

        //Return the array of objects in the callback function
        callback(stockList);

    })
}