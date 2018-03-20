const path = require('path')

module.exports = {
  entry: {
    content_scripts: './src/popup/translateDocument.js'
  },
  output: {
    path: path.resolve(__dirname, 'webExtension/'),
    filename: 'content_script.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  }
}
