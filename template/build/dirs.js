const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.join(rootDir, 'src')
const distDir = path.join(rootDir, 'dist')
const asserts = path.join(rootDir, 'static')
const npmDir = path.join(rootDir, 'node_modules')

module.exports = {
    rootDir,
    srcDir,
    distDir,
    asserts,
    npmDir,
}
