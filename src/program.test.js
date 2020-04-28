const {program} = require('./program')

test('program with undefined opts provides empty opts', () => {
  const cmd = program('foo')
  const exp = program('foo', [])

  expect(cmd).toStrictEqual(exp)
})