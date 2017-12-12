const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirs = require('./dirs')

function cssLoaders(options) {
    const opt = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: opt.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: opt.sourceMap
        }
    }

    function generateLoaders(loader, loaderOptions) {
        const loaders = [cssLoader, postcssLoader]

        if (loader) {
            loaders.push({
                loader: `${loader}-loader`,
                options: Object.assign({}, loaderOptions, {
                    sourceMap: opt.sourceMap
                })
            })
        }

        if (opt.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'style-loader'
            })
        } else {
            return ['style-loader'].concat(loaders)
        }
    }

    return {
        css: generateLoaders(),
        less: generateLoaders('less'),
    }
}

function genStyleLoaders(options) {
    const output = []
    const loaders = cssLoaders(options)

    Object.keys(loaders).forEach(ext => {
        const loader = loaders[ext]
        output.push({
            test: new RegExp(`\\.${ext}$`),
            use: loader
        })
    })

    return output
}

function genHtmlPlugin(options) {
    return new HtmlWebpackPlugin(Object.assign({
        template: path.join(dirs.srcDir, 'index.html'),
        filename: 'index.html',
        inject: true,
    }, options || {}))
}

module.exports = {
    genStyleLoaders,
    genHtmlPlugin,
}
