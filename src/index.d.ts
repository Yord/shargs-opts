export {array}       from './array'
export {arrayPos}    from './arrayPos'
export {bool}        from './bool'
export {boolPos}     from './boolPos'
export {subcommand}  from './subcommand'
export {complement}  from './decorators/complement'
export {flag}        from './flag'
export {number}      from './number'
export {numberPos}   from './numberPos'
export {posArgToOpt} from './decorators/posArgToOpt'
export {command}     from './command'
export {string}      from './string'
export {stringPos}   from './stringPos'
export {variadic}    from './variadic'
export {variadicPos} from './variadicPos'

export interface Opt {
  args?: string[]
  contradicts?: string[],
  defaultValues?: any
  desc?: string
  descArg?: string
  implies?: string[]
  key?: string
  only?: any[]
  opts?: Opt[]
  required?: boolean
  reverse?: boolean
  rules?: (opt?: Opt) => (opts?: Opt[]) => boolean
  types?: string[]
  values?: any[]
  [key: string]: any
}

export interface Fields {
  contradicts?: string[],
  defaultValues?: any
  desc?: string
  descArg?: string
  implies?: string[]
  only?: any[]
  opts?: Opt[]
  required?: boolean
  reverse?: boolean
  rules?: (opt?: Opt) => (opts?: Opt[]) => boolean
  values?: any[]
  [key: string]: any
}