const autoprefixer = require('autoprefixer')

const env = process.env.NODE_ENV.trim()

module.exports = {
    sourceMap: env !== 'production',
    plugins: [
        autoprefixer(),
    ],
}
