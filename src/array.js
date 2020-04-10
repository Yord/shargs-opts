module.exports = types => (key, args, fields = {}) => {
  const {__proto__, key: _1, types: _2, args: _3, values: _4, ...rest} = fields

  return {
    key,
    types,
    args,
    ...rest
  }
}