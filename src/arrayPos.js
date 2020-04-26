const {array} = require('./array')

const arrayPos = types => (key, fields) => array(types)(key, undefined, fields)

module.exports = {
  arrayPos
}