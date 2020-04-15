const command = require('./command')

test('command with undefined opts provides empty opts', () => {
  const cmd = command()('foo', ['-f'])
  const exp = command([])('foo', ['-f'])

  expect(cmd).toStrictEqual(exp)
})