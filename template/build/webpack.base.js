const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const env = process.env.NODE_ENV.trim();

const distDir = 'dist';
const imagesDir = 'images';
const rootPath = path.resolve(__dirname, '../');
const srcPath = path.join(rootPath, 'src');
const distPath = path.join(rootPath, distDir);
const entryPath = path.join(srcPath, 'index.js');
{{#antd}}

// customize ant-design theme
// see https://ant.design/docs/react/customize-theme-cn
const antdTheme = require('./modifyAntdTheme.js');
const lessOption = '?{"modifyVars": ' + JSON.stringify(antdTheme) + '}';
{{/antd}}
{{#cssModules}}

// enable css-modules
// see https://github.com/css-modules/webpack-demo
const cssOption = '?modules&camelCase&localIdentName=[name]-[local]__[hash:base64:5]';
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
            '@': ''
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
