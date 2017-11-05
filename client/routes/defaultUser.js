var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var userInfo = {
        "username": process.env.USERNAME,
        "starting": process.env.STARTING,
        "avaliable": process.env.AVALIABLE,
        "invested": process.env.INVESTED,
        "netProfit": process.env.NET_PROFIT,
        "unique": process.env.UNIQUE,
        "totalShares": process.env.TOTAL_SHARE,
        "stocks": process.env.STOCKS,
        "stock_shares": process.env.STOCK_SHARES,
    }

    res.send(userInfo);
});

module.exports = router;