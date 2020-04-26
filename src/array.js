const array = types => (key, args, fields = {}) => {
  const {__proto__, key: _1, types: _2, args: _3, ...rest} = fields

  return {
    key,
    ...(typeof types !== 'undefined' ? {types} : {}),
    ...(typeof args  !== 'undefined' ? {args}  : {}),
    ...rest
  }
}

module.exports = {
  array
}