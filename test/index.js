/*
* @Author: tungjason
* @Date:   2018-02-09 15:14:43
* @Last Modified by:   tungjason
* @Last Modified time: 2018-02-12 10:38:54
*/

let tpl = require('./index.hbs')
let compiled = tpl({
  person: 'Jack',
  address: {
    city: 'Beijing'
  }
})
console.log(compiled)
