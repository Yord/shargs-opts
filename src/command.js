const {variadicPos} = require('./variadicPos')

const command = (key, opts = [], fields = {}) => variadicPos(key, {opts, ...fields})

module.exports = {
  command
}