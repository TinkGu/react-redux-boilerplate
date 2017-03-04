var webpack = require('webpack');
var webpackConfig = require('./webpack.base.js');

webpackConfig.entry.app.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
);
webpackConfig.debug = true;
webpackConfig.devtool = 'cheap-module-eval-source-map';
webpackConfig.output.publicPath = '/';

webpackConfig.plugins.unshift(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

module.exports = webpackConfig;
