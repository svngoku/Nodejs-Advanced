const { createServer } = require('http');
const Router = require('./url/router');
// const ecstatic = require('ecstatic');

const router = new Router();
const defaultHeaders = { "content-type": "Text/plain" };

router.add('GET', '/home', (req,res) => {
    res.json('hello world');
});


