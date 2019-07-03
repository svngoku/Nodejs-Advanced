const express = require('express');
const app = express();
const fs = require("fs");


let user = {
   "user" : {
      "name" : "Svngoku",
      "password" : "pass1234word",
      "profession" : "teacher",
      "id": 1
   }
}

app.get('/addUser', function (req, res) {

   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user"] = user["user"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

let server = app.listen(8081, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("Running on http://%s:%s", host, port)

});
