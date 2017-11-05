var express = require('express');
var router = express.Router();

var ticker = require('../public/js/utilities/tickerHandler');

/* GET home page. */
router.get('/', function(req, res, next) {
    ticker.getHistoricalTickerInformation("appl", (history) => {
        var test = {'history': history}
        res.send(test);
    });
});

module.exports = router;