const array = types => (key, args, fields = {}) => {
  const {__proto__, key: _1, types: _2, args: _3, ...rest} = fields

  return {
    key,
    ...(typeof args  !== 'undefined' ? {args}  : {}),
    ...(typeof types !== 'undefined' ? {types} : {}),
    ...rest
  }
}

module.exports = {
  array
}