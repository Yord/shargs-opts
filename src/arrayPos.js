const array = require('./array')

module.exports = types => (key, fields) => array(types)(key, undefined, fields)