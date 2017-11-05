var express = require('express');
var router = express.Router();
var db = require('../database/database.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //Query the SQL database and find out how much money the user currently has
    var query = "SELECT * FROM usertable WHERE (id = " + 1 + ");";
    
    db.get(query, (rows, fields) => {
        console.log("SQL Response from insert request: " + rows);
        res.send(row);
    });
});

module.exports = router;