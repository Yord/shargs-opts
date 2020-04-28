const {variadicPos} = require('./variadicPos')

const program = (key, opts = [], fields = {}) => variadicPos(key, {opts, ...fields})

module.exports = {
  program
}