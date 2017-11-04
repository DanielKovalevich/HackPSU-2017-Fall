var express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

router.use(bodyParser.json());

/* POST processes the signup */
router.post('/', function(req, res, next) {
    console.log(req);
    console.log(req.body);
    /*
    async () => {
        try {
            const pool = await sql.connect('mssql://username:password@localhost/database')
            const result = await sql.query`select * from mytable where id = ${value}`
            console.dir(result)
        } catch (err) {
            
        }
    }*/
    res.json({message: 'User created'});
});

module.exports = router;