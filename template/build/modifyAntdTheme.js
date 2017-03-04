var lessToJs = require('less-vars-to-js');
var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, '../src/styles/antdTheme.less');
var theme = fs.readFileSync(filePath, 'utf-8');

module.exports = lessToJs(theme);
