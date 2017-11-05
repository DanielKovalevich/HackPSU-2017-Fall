var express = require('express');
var router = express.Router();
var db = require('../public/js/utilities/database');

/* GET home page. */
router.post('/', function(req, res, next) {
    var query = 'SELECT * FROM usertable WHERE username=' + req.body.username;
    db.get(query, (row, fields) => {
        console.log(row);

        process.env.USER_ID = req.body.user_id;
        process.env.USERNAME = req.body.username;
        process.env.STARTING = req.body.starting;
        process.env.AVALIABLE = req.body.avaliable;
        process.env.INVESTED = req.body.invested;
        process.env.NET_PROFIT = req.body.net_profit;
        process.env.UNIQUE = req.body.unique;
        process.env.TOTAL_SHARE = req.body.total;
        process.env.STOCKS = req.body.stocks;
        process.env.STOCK_SHARES = req.body.shares;
    });

    res.send('./index');
});

module.exports = router;