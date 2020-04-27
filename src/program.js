const {variadicPos} = require('./variadicPos')

const program = (opts = []) => (key, fields = {}) => variadicPos(key, {opts, ...fields})

module.exports = {
  program
}