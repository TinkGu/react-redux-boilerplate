const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const createConfig = require('./webpack.base.conf')
const { genStyleLoaders, genHtmlPlugin } = require('./utils')
const dirs = require('./dirs')

module.exports = function createProdConfig() {
    const conf = createConfig()

    conf.output = Object.assign({}, conf.output, {
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[id]-[chunkhash].js',
    })

    conf.module.rules = conf.module.rules.concat(genStyleLoaders({
        extract: true,
    }))

    conf.plugins.push(
        new CleanWebpackPlugin([dirs.distDir], {
            root: dirs.rootDir,
        }),
        new ExtractTextPlugin({
            filename: '[name]-[contenthash].css',
            allChunks: true,
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            parallel: true, // use multi processes
            sourceMap: false,
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: { safe: true },
        }),
        genHtmlPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            chunksSortMode: 'dependency'
        }),
        // keep module.id stable when vender modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => (
                resource &&
                resource.match(/\.(js|jsx)$/) &&
                resource.indexOf(dirs.npmDir) >= 0
            ),
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        // This instance extracts shared chunks from code splitted chunks and bundles them
        // in a separate chunk, similar to the vendor chunk
        // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'vendor-async',
            children: true,
            minChunks: 3
        }),
    )

    return conf
}
