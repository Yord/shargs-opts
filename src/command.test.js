const {command} = require('./command')

test('program with undefined opts provides empty opts', () => {
  const cmd = command('foo')
  const exp = command('foo', [])

  expect(cmd).toStrictEqual(exp)
})