var db = require('./database.js');

function getHistoricalTickerInformation(symbol, callback) {

    var query = "SELECT * FROM tickertable WHERE symbol = \"" + symbol + "\" ORDER BY date DESC LIMIT 20;"

    db.get(query, (rows, fields) => {
        console.log("SQL Response from insert request: " + rows);

        //Create a giant ass array holding the ticker information for each of these values
        var historyList = [];

        for(i = 0; i < rows.length; i++) {

            //Entry 1 and 2 are bad, so we're going to hack this and skip them
            if(i == 0 || i == 1) {
                continue;
            }

            //Create the object which we'll be inserting into the array
            var historicalElement = {
                symbol: rows[i].symbol,
                open: rows[i].open,
                low: rows[i].low,
                close: rows[i].close                
            };

            //Since we're starting at index 3, 
            historyList[i - 2] = historicalElement;
        }

        //Let the callback equal the list of elements
        callback(historyList);

    });


}

