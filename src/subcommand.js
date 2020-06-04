const {variadic} = require('./variadic')

const subcommand = (opts = []) => (key, args, fields = {}) => variadic(key, args, {opts, ...fields})

module.exports = {
  subcommand
}