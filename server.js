const { createServer } = require('http');
const Router = require('./url/router');
const router = new Router();
const {port} = {
    hostname: 'localhost',
    port: 8080
};
const message = { 
    message : 'Hello World' 
};

const server = createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Content-Type", "application/json");
    res.status = 200;
    res.end(JSON.stringify(message));
});



server.listen(port);


