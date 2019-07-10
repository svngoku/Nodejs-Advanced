'use strict';
// require Hapi
const Hapi = require('hapi');

// server 
const server = Hapi.server({ 
  "host" : "localhost", 
  "port" : 5000 , 
  "routes" : { "cors" : true }
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Salut depuis Hapi 🎧';
  }
});

// initialise le server asynchronously
const init = async() => {
   await server.start();
   console.log(`Server running at : ${server.info.uri}`);
};

init();
