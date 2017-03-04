var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.js');

var CleanWebpackPlugin = require('clean-webpack-plugin');

webpackConfig.devtool = false;
webpackConfig.plugins.unshift(
    new CleanWebpackPlugin(webpackConfig.pathes.distDir, {
        root: webpackConfig.pathes.rootPath,
        verbose: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        names: 'common',
        minChunks: 2,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 30000,
    })
);

module.exports = webpackConfig;
