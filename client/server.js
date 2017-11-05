'use strict'

var express = require('express'),
path = require('path'),
app = express();

//set the port
app.set('port', 3000);

//tell express that we want to use the www folder
//for our static assets
app.use(express.static(path.join(__dirname, 'public')));

// creation of first user; just used to populate the data
process.env.USER_ID = 1;
process.env.USERNAME = 'CWeiser';
process.env.STARTING = 1300;
process.env.AVALIABLE = 52.53;
process.env.INVESTED = 847.38;
process.env.NET_PROFIT = -400.09;
process.env.UNIQUE = 3;
process.env.TOTAL_SHARE = 315;
process.env.STOCKS = ['XXII', 'MU', 'CBR'];
process.env.STOCK_SHARES = [205, 10, 100];

// routing
var example = require('./routes/example');
var defaultUser = require('./routes/defaultUser');
var changeUser = require('./routes/changeUser');
app.use('/example', example);
app.use('/defaultUser', defaultUser);
app.use('/changeUser', changeUser);

// Listen for requests
var server = app.listen(app.get('port'), function () {
    console.log('The server is running on http://localhost:' + app.get('port'));
});