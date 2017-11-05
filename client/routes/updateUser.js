var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var jsonParser = bodyParser.json();

/* GET home page. */
router.post('/', jsonParser, function(req, res, next) {
    data = req.body;
    console.log(data);
    process.env.INVESTED = parseInt(process.env.INVESTED) + parseInt(data.amount * data.price);
    process.env.UNIQUE = (process.env.UNIQUE)++;
    var num = parseInt(process.env.TOTAL_SHARE);
    num += parseInt(data.amount);
    process.env.TOTAL_SHARE = num;
    var ar = process.env.STOCKS.split(',');
    ar.push(data.stock);
    process.env.STOCKS = ar;
    ar = process.env.STOCK_SHARES.split(',')
    ar.push(data.amount);
    process.env.STOCK_SHARES = ar;

    res.send({redirect: '/'})
});

module.exports = router;