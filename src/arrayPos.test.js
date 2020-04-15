const {anything, array: arbArray, assert, base64, constant, oneof, property, unicodeString} = require('fast-check')
const arrayPos = require('./arrayPos')

test('arrayPos is correctly assembled', () => {
  const typesKeyArgsOptionsResult = types().chain(types =>
    base64().chain(key =>
      oneof(constant(undefined), unicodeString()).chain(desc =>
        oneof(constant(undefined), anything()).chain(rules =>
          oneof(constant(undefined), anything()).chain(only =>
            oneof(constant(undefined), anything()).chain(opts =>
              oneof(constant(false), constant(true)).chain(required =>
                oneof(constant(false), constant(true)).chain(reverse =>
                  oneof(constant(undefined), anything()).chain(defaultValues =>
                    oneof(constant(undefined), constant({desc, rules, only, opts, required, reverse, defaultValues})).map(options =>
                      ({
                        types,
                        key,
                        options,
                        result: {
                          key,
                          args: null,
                          types,
                          ...(typeof options !== 'undefined' ? {desc}          : {}),
                          ...(typeof options !== 'undefined' ? {only}          : {}),
                          ...(typeof options !== 'undefined' ? {opts}          : {}),
                          ...(typeof options !== 'undefined' ? {defaultValues} : {}),
                          ...(typeof options !== 'undefined' ? {required}      : {}),
                          ...(typeof options !== 'undefined' ? {reverse}       : {}),
                          ...(typeof options !== 'undefined' ? {rules}         : {})
                        }
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )

  assert(
    property(typesKeyArgsOptionsResult, ({types, key, options, result}) =>
      expect(
        arrayPos(types)(key, options)
      ).toStrictEqual(
        result
      )
    )
  )
})

function types () {
  const oneElem = ['string', 'number', 'bool']
  const arr = arbArray(oneof(...oneElem.map(constant)), 2, 10)
  return oneof(...[...oneElem.map(a => [a]), [], null].map(constant), arr)
}