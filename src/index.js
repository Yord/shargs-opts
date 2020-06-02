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
const {string}      = require('./string')
const {stringPos}   = require('./stringPos')
const {subcommand}  = require('./subcommand')
const {variadic}    = require('./variadic')
const {variadicPos} = require('./variadicPos')

module.exports = {
  array,
  arrayPos,
  bool,
  boolPos,
  complement,
  flag,
  number,
  numberPos,
  posArgToOpt,
  command,
  string,
  stringPos,
  subcommand,
  variadic,
  variadicPos
}