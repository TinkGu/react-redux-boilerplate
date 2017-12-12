const webpack = require('webpack')
const createConfig = require('./webpack.base.conf')
const { genStyleLoaders, genHtmlPlugin } = require('./utils')
const CONFIG = require('../config')

module.exports = function createDevConfig() {
    const conf = createConfig()

    conf.entry.app = ['react-hot-loader/patch'].concat(conf.entry.app)
    conf.devtool = 'cheap-module-eval-source-map'
    conf.devServer = {
        host: CONFIG.devServer.host,
        port: CONFIG.devServer.port,
        hot: true,
        noInfo: true,
        compress: true,
        clientLogLevel: 'warning',
        historyApiFallback: true,
        publicPath: conf.output.publicPath,
        watchOptions: {
            poll: true,
        }
    }
    conf.plugins = conf.plugins.concat([
        genHtmlPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ])

    conf.module.rules = conf.module.rules.concat(genStyleLoaders({
        sourceMap: true,
    }))

    return conf
}
