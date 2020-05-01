const {array}       = require('./array')
const {arrayPos}    = require('./arrayPos')
const {bool}        = require('./bool')
const {boolPos}     = require('./boolPos')
const {command}     = require('./command')
const {complement}  = require('./decorators/complement')
const {flag}        = require('./flag')
const {number}      = require('./number')
const {numberPos}   = require('./numberPos')
const {posArgToOpt} = require('./decorators/posArgToOpt')
const {program}     = require('./program')
const {string}      = require('./string')
const {stringPos}   = require('./stringPos')
const {variadic}    = require('./variadic')
const {variadicPos} = require('./variadicPos')

module.exports = {
  array,
  arrayPos,
  bool,
  boolPos,
  command,
  complement,
  flag,
  number,
  numberPos,
  posArgToOpt,
  program,
  string,
  stringPos,
  variadic,
  variadicPos
}