var express = require('express');
var router = express.Router();

var ticker = require('../public/js/utilities/tickerHandler');

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req);
    ticker.getHistoricalTickerInformation(req.body.ticker, (history) => {
        var test = {'history': history}
        res.send(test);
    });
});

module.exports = router;