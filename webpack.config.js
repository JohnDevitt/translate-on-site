const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'content_script.js': path.resolve(
      __dirname,
      'src/content_script/translateDocument.js'
    ),
    'popup/popup.js': path.resolve(__dirname, 'src/popup/popup.js')
  },
  output: {
    path: path.resolve(__dirname, 'webExtension/'),
    filename: '[name]'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: 'vue-loader',
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            }),
            sass: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader?indentedSyntax',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?emitFile=false'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
}
