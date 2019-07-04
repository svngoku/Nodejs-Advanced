const mysql = require('mysql');

let con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'FREDI'
});

con.connect((err, success) => {
  if(err) throw err;
  console.log("Connected ... ")
});
