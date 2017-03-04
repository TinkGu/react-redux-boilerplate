var path = require('path');
var jsonServer = require('json-server');
var config = require('../config.js').API_SERVER;

var server = jsonServer.create();
var router = jsonServer.router(path.join(__dirname, 'db.json'));
var middlewares = jsonServer.defaults();

var rewriter = {};
rewriter[config.API_PREFIX] = '/';

server.use(middlewares);
server.use(router);
server.use(jsonServer.rewriter(rewriter));
server.listen(config.PORT, function() {
    console.log('Mock server is running at http://127.0.0.1:' + config.PORT);
});
