import {Fields, Opt} from '.'

export const subcommand: (opts?: Opt[]) => (key: string, args: string[], fields?: Fields) => Opt