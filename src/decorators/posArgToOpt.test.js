const {command, posArgToOpt, program, stringPos} = require('..')

test('posArgToOpt README example works', () => {
  const opts = [stringPos('question')]

  const args = ['deepThought', 'D']

  const deepThought = program('deepThought', opts)

  const res = posArgToOpt(args)(deepThought)

  const exp = command(opts)('deepThought', args)

  expect(res).toStrictEqual(exp)
})

test('posArgToOpt works if opt is undefined', () => {
  const opt = posArgToOpt([])()

  const exp = {args: []}

  expect(opt).toStrictEqual(exp)
})