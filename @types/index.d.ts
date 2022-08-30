export interface MainConfig {
  prefix?: Prefix | string;
  sufix?: Sufix | string;
  trace?: boolean;
}

interface Prefix {
  prefix: string;
  trace: boolean;
}

interface Sufix {
  sufix: string;
  trace: boolean;
}
