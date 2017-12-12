const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin')
const dirs = require('./dirs')

const env = process.env.NODE_ENV.trim()

module.exports = function createConfig() {
    return {
        entry: {
            app: [path.join(dirs.srcDir, 'index.jsx')],
        },
        output: {
            path: dirs.distDir,
            filename: '[name].js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias: {
                '@': dirs.srcDir,
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: joinToAsserts('img/[name].[hash:7].[ext]')
                    },
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: joinToAsserts('media/[name].[hash:7].[ext]')
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: joinToAsserts('fonts/[name].[hash:7].[ext]')
                    }
                },
            ],
        },
        plugins: [
            new ProgressBarPlugin({ clear: false }),
            new CaseSensitivePlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env),
                __ENV__: JSON.stringify(env),
            }),
        ],
    }
}


function joinToAsserts(_path) {
    return path.join(dirs.asserts, _path)
}
