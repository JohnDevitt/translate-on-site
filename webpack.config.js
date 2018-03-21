const path = require('path')

module.exports = {
  entry: {
    content_scripts: './src/content_script/translateDocument.js'
  },
  output: {
    path: path.resolve(__dirname, 'webExtension/'),
    filename: 'content_script.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  }
}
