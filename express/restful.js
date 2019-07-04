const express = require('express');
const app = express();
const fs = require("fs");


app.get('/', function(req, res) {
  res.sendStatus(200)
});

// route to  get the different user
app.get('/users', function (req, res) {
  // res.writeHead(200, {"Content-Type": "text/json; charset=utf-8"})
   fs.readFile( __dirname + "/" + "users.json", 'utf-8', function (err, data) {
       if(err) {
         res.json(err)
         console.log(err);
       } else {
         data = JSON.parse(data);
         res.end( JSON.stringify(data));
       }
   });
})

// Server
const server = app.listen(8081, function () {
  const port = server.address().port;
  console.log(`Running on http://localhost:${port}`)
});
