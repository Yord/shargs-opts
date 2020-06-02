const {subcommand} = require('./subcommand')

test('subcommand with undefined opts provides empty opts', () => {
  const cmd = subcommand()('foo', ['-f'])
  const exp = subcommand([])('foo', ['-f'])

  expect(cmd).toStrictEqual(exp)
})