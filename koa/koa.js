const koa = require('koa');
const koaJson = require('koa-json');
const koaRouter = require('koa-router');
const app = new koa();
const router = new koaRouter();
const PORT = 4000;

// format app to json 
app.use(koaJson());

// routes 
router.get('/', ctx => (ctx.body = 'Welcome to home page'));
router.get('/about', ctx => (ctx.body = 'Welcome to about page'));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

// app.use(async ctx => (ctx.body = { message : 'Hello from KOA'} ));

app.listen(PORT, function() {
    console.log('Server run on port %s', PORT);
});