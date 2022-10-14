type Join<
  T extends any[],
  U extends string | number,
  S extends string = ""
> = T extends [infer F, ...infer R]
  ? R["length"] extends 0
    ? `${S}${F & string}`
    : `${S}${F & string}${U}${Join<R, U, S>}`
  : S;
