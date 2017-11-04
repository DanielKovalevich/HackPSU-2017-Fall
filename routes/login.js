var express = require('express');
const sql = require('mssql')

var router = express.Router();

/* GET test function. */
router.get('/', function(req, res, next) {
  console.log("TEST FUNCTION");

  async () => {
    try {
        const pool = await sql.connect('mssql://root:admin@localhost/game')
        const result = await sql.query(`select * from UserTable`);
        console.dir(result)
    } catch (err) {
      console.log('Error: ' + err);
    }
  }
  res.json({message: 'Fuck off'});
});

module.exports = router;