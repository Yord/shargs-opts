const {subcommand, posArgToOpt, program, stringPos} = require('..')

test('posArgToOpt README example works', () => {
  const opts = [stringPos('question')]

  const args = ['deepThought', 'D']

  const deepThought = program('deepThought', opts)

  const res = posArgToOpt(args)(deepThought)

  const exp = subcommand(opts)('deepThought', args)

  expect(res).toStrictEqual(exp)
})

test('posArgToOpt works if opt is undefined', () => {
  const opt = posArgToOpt([])()

  const exp = {args: []}

  expect(opt).toStrictEqual(exp)
})

test('posArgToOpt works if args are undefined', () => {
  const opt = posArgToOpt()({})

  const exp = {args: []}

  expect(opt).toStrictEqual(exp)
})

test('posArgToOpt does not assign args if opt already has args', () => {
  const opts = [stringPos('question')]

  const args = ['deepThought', 'D']

  const deepThought = subcommand(opts)('deepThought', args)

  const res = posArgToOpt(['foo'])(deepThought)
  
  const exp = deepThought

  expect(res).toStrictEqual(exp)
})