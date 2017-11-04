var express = require('express');

var router = express.Router();

/* GET test function. */
router.get('/', function(req, res, next) {
  console.log("TEST FUNCTION");

  

  res.json({message: 'Fuck off'});
});

module.exports = router;