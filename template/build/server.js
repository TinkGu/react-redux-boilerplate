var path = require('path');
var webpack = require('webpack');
var express = require('express');
var httpProxy = require('http-proxy');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.dev.js');
var projectConfig = require('../config.js');
var devServerConfig = projectConfig.DEV_SERVER;
var apiServerConfig = projectConfig.API_SERVER;

var app = express();
var compiler = webpack(webpackConfig);

app.use(devMiddleware(compiler, {
    host: devServerConfig.HOST,
    port: devServerConfig.PORT,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    noInfo: true,
}));

app.use(hotMiddleware(compiler));

// see https://github.com/webpack/webpack-dev-middleware/issues/67#issuecomment-187358393
var proxy = httpProxy.createProxyServer();
app.use(apiServerConfig.API_PREFIX + '*', function(req, res) {
    req.url = req.baseUrl;
    proxy.web(req, res, {
        target: {
            host: apiServerConfig.HOST,
            port: apiServerConfig.PORT,
        }
    });
});

// see https://github.com/ampedandwired/html-webpack-plugin/issues/145#issuecomment-170554832
app.get('*', function(req, res, next) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result) {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(devServerConfig.PORT, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://'
        + devServerConfig.HOST + ':'
        + devServerConfig.PORT
    );
});
