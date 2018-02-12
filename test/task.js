/*
* @Author: tungjason
* @Date:   2018-02-09 15:03:03
* @Last Modified by:   tungjason
* @Last Modified time: 2018-02-09 15:10:05
*/
const webpack = require('webpack')
const conf = require('./webpack.config')

let compiler = webpack(conf)
compiler.run((err, stats) => {
  if (err) {
    console.log(err)
  } else {
    console.log(
      stats.toString({
        children: false,
        colors: true,
        modules: false
      })
    )
  }
})
