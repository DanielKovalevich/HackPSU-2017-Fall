var express = require('express');
var db = require('../database/database.js');

var router = express.Router();

router.get('/', function(req, res, next) {
	var username = req.body.username;

	var query = 'SELECT username FROM UserTable WHERE username=' + username;
	
	db.get(query, (rows, fields) => {
		console.log(rows);
	});

	res.json({message: 'Fuck off'});
});

module.exports = router;