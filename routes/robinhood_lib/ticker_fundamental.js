var request = require('request');
var db = require('../../database/database.js');

function getTickerQuoteJson(stockSymbol, callback) {

    request({
        url: 'https://api.robinhood.com/quotes/' + stockSymbol + '/', //URL to hit
        method: 'GET', // specify the request type
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log('Debug Robinhood response for JsonQuote:');
            console.log(response.statusCode, body);

            //Convert the response into a JsonObject and return it
            callback(JSON.parse(response));
        }
    });

}

function getTickerFundamentalJson(stockSymbol, callback) {

    request({
        url: 'https://api.robinhood.com/fundamentals/?symbols=' + stockSymbol, //URL to hit
        method: 'GET', // specify the request type
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log('Debug Robinhood response for FundamentalJson:');
            console.log(response.statusCode, body);

            //Convert the response into a JsonObject and return it
            callback(JSON.parse(response));
        }
    });
}

function updateTickerDatabaseEntry(stockSymbol) {

    //See the following documentation on what is returned in the below object
    //https://github.com/sanko/Robinhood/blob/master/Fundamentals.md


    var tickerQuotes = getTickerQuoteJson(stockSymbol, (quoteResponse) => {

        var tickerFundamental = getTickerFundamentalJson(stockSymbol, (fundamentalResponse) => {

            //Time and date functions
            var today = new Date();
            var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var currentTime = today.getHours + ":" + today.getHours + ":" + today.getSeconds;

            //Create the SQL Query to deal with the ticker information
            var query = "INSERT INTO tickertable (symbol, date, time, open, high, low, close, current, volume) "
                + "VALUES (" + stockSymbol + "," + currentDate + "," + currentTime + "," + fundamentalResponse.open + ","
                + fundamentalResponse.high + "," + fundamentalResponse.low + "," + fundamentalResponse.close + ","
                + quoteResponse.ask_price + "," + tickerFundamental.volume + ");";

            db.get(query, (rows, fields) => {
                console.log("SQL Response from insert request: " + rows);
            });

        });

    });

}
