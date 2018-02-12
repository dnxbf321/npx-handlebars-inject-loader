/*
* @Author: tungjason
* @Date:   2018-02-09 15:02:50
* @Last Modified by:   tungjason
* @Last Modified time: 2018-02-12 10:35:10
*/
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].js?[hash]',
    chunkFilename: '[name].js?[chunkhash]',
    path: path.join(__dirname, 'dist')
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../../')]
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              partialDirs: [path.join(__dirname, 'partial')]
            }
          },
          {
            loader: 'npx-handlebars-inject-loader',
            options: {
              data: {
                person: 'Jack',
                address: {
                  city: 'Beijing'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.hbs',
      inject: true
    })
  ]
}
