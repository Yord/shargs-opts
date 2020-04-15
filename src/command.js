const variadic = require('./variadic')

module.exports = (opts = []) => (key, args, fields = {}) => variadic(key, args, {opts, ...fields})