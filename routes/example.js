var express = require('express');
const sql = require('mssql')

var router = express.Router();

/* GET test function. */
router.get('/', function(req, res, next) {
  console.log("TEST FUNCTION");

  async () => {
    try {
        const pool = await sql.connect('mssql://username:password@localhost/database')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
      
    }
  }
  res.json([{
    id: 1,
    username: "Daniel"}]);
});

module.exports = router;