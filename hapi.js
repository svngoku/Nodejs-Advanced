const api = require('hapi');
const Server = new Hapi.Server();

Server.connection({ 
  "host" : "localhost", 
  "port" : 3000 , 
  "routes" : { "cors" : true });
Server.start(error => {
    if(error) {
      throw error;
    }
    console.log('listen at ${Server.info.uri}');    
  });

