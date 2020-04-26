const {variadic} = require('./variadic')

const command = (opts = []) => (key, args, fields = {}) => variadic(key, args, {opts, ...fields})

module.exports = {
  command
}