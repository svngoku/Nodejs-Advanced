const mysql = require('mysql');

let con = mysql.createConnection({
  host : 'localhost',
  user : 'username',
  password : 'your_password',
  database : 'database_name'
});

con.Connect((err) => {
  if(err) throw err;
  console.log("Connected ... ")
});
