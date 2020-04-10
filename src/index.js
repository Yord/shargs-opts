const array      = require('./array')
const bool       = require('./bool')
const command    = require('./command')
const flag       = require('./flag')
const number     = require('./number')
const string     = require('./string')
const complement = require('./decorators/complement')

module.exports = {
  array,
  bool,
  command,
  flag,
  number,
  string,
  complement
}