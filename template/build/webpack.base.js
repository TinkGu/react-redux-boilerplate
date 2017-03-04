var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var env = process.env.NODE_ENV.trim();

var distDir = 'dist';
var imagesDir = 'images';
var rootPath = path.resolve(__dirname, '../');
var srcPath = path.join(rootPath, 'src');
var distPath = path.join(rootPath, distDir);
var entryPath = path.join(srcPath, 'index.js');
{{#antd}}

// customize ant-design theme
// see https://ant.design/docs/react/customize-theme-cn
var antdTheme = require('./modifyAntdTheme.js');
var lessOption = '?{"modifyVars": ' + JSON.stringify(antdTheme) + '}';
{{/antd}}
{{#cssModules}}

// enable css-modules
// see https://github.com/css-modules/webpack-demo
var cssOption = '?modules&camelCase&localIdentName=[name]-[local]__[hash:base64:5]';
{{/cssModules}}

module.exports = {
    pathes: {
        rootPath: rootPath,
        srcPath: srcPath,
        distPath: distPath,
        distDir: distDir,
        imagesDir: imagesDir,
    },
    entry: {
        app: ['babel-polyfill', entryPath],
        common: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'react-router-redux',
            'redux-thunk',
            'classnames',
            'axios',
        ],
    },
    output: {
        path: distPath,
        filename: '[name].js',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.less', '.css'],
        alias: {
            _actions: aliasDir('actions'),
            _apis: aliasDir('apis'),
            _components: aliasDir('components'),
            _config: aliasDir('../config'),
            _constants: aliasDir('constants'),
            _containers: aliasDir('containers'),
            _reducers: aliasDir('reducers'),
            _routes: aliasDir('routes'),
            _services: aliasDir('services'),
            _store: aliasDir('store'),
            _styles: aliasDir('styles'),
            _utils: aliasDir('utils'),

            _createActionCreators: aliasDir('utils/redux/createActionCreators'),
            _extractActionTypes: aliasDir('utils/redux/extractActionTypes'),
            _createReducer: aliasDir('utils/redux/createReducer'),
        },
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                loader: setStyleLoaderByEnv('css!postcss'),
            }, {
                test: /\.less$/,
                loader: setStyleLoaderByEnv('css!postcss!less'{{#antd}} + lessOption{{/antd}}),
                {{#cssModules}}
                include: /node_modules/,
            }, {
                test: /\.less$/,
                loader: setStyleLoaderByEnv('css' + cssOption + '!postcss!less'),
                exclude: /node_modules/,
                {{/cssModules}}
            }, {
                test: /.(png|jpe?g|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10240,
                    name: imagesDir + '/[name].[ext]',
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            chunks: ['common', 'app'],
        }),
    ],
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] }),
    ],
};

function aliasDir(dirname) {
    return path.join(srcPath, dirname);
}

function setStyleLoaderByEnv(loaders) {
    return env === 'development' ? 'style!' + loaders : ExtractTextPlugin.extract(loaders);
}
