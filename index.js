/*
* @Author: tungjason
* @Date:   2018-02-11 09:47:44
* @Last Modified by:   tungjason
* @Last Modified time: 2018-02-12 10:36:59
*/
module.exports = function(content, map, meta) {
  const vars = this.query.data
  let replaced = content.replace(/{{ *([^} ]+) *}}/g, (match, inMatch) => {
    let keys = inMatch.split('.')
    try {
      let ret = Object.assign({}, vars)
      for (let i = 0, len = keys.length; i < len; i++) {
        ret = ret[keys[i]]
      }
      return ret ? ret : match
    } catch (e) {
      return match
    }
  })
  return replaced
}
