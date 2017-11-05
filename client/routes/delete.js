var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
var jsonParser = bodyParser.json();

/* GET home page. */
router.post('/', jsonParser, function(req, res, next) {
    data = req.body;
    console.log(data);
    
    process.env.UNIQUE = (process.env.UNIQUE)--;
    var num = parseInt(process.env.TOTAL_SHARE);
    num = parseInt(num) - parseInt(data.amount);
    process.env.TOTAL_SHARE = num;


    var ar = process.env.STOCKS.split(',');
    var index = ar.indexOf(data.stock);
    ar.splice(index, 1);
    process.env.STOCKS = ar;
    ar = process.env.STOCK_SHARES.split(',')
    var index = ar.indexOf(data.amount);
    ar.splice(index, 1);
    process.env.STOCK_SHARES = ar;

    res.send({redirect: '/'})
});

module.exports = router;