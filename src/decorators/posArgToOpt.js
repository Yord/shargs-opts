const posArgToOpt = (args = []) => (opt = {}) => (
  Array.isArray(opt.args) ? opt : {...opt, args}
)

module.exports = {
  posArgToOpt
}