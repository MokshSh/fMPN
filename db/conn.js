const mysql=require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port:'3306',
    database:'testingtoconnecttonode'
  });
  con.connect(function(err) { 
    if (err) res.send("Database not connected");
    console.log('Database is connected successfully !'); 
  }); 
  module.exports=con