var db = require('database.js');


function getAccountTotal(uid) {

    var query = "SELECT AvailableMoney, InvestedMoney FROM usertable WHERE (id = " + uid + ");";
    
    db.get(query, (rows, fields) => {
    console.log("SQL Response from insert request: " + rows);

    //Success! Return true
    return true;
});

}