const mysql = require('mysql2');
  var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dude4awl$S',
    database : 'employeedb'
    
  })

 var connection = mysqlConnection.connect((err)=>{
    if(err){
        console.log('Error in DB connection', +JSON.stringify(err,undefined,2));
    } else {
        console.log('DB connected Sucessfully');
    }
});

exports.connection = connection;
module.exports=mysqlConnection;