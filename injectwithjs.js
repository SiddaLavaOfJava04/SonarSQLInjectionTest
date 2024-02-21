connection.query("SELECT * FROM USERS WHERE username = ?",[
     req.body.username
    ],function(error, results){}); 
//emulates a prepared statement

//OR

connection.execute("SELECT * FROM USERS WHERE username = ?",[
     req.body.username
    ],function(error, results){});
//prepared statement
