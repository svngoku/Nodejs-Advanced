'use strict';

// require Hapi
const Hapi = require('hapi');

// server 
const server = Hapi.server({ 
  "host" : "localhost", 
  "port" : 5000 , 
  "routes" : { "cors" : true }
});

// initialise server asynchronously
const init = async() => {
   await server.start();
   console.log(`Server running at : ${server.info.uri}`);
};

init();
