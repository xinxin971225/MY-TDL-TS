type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer chart}${infer R}`
  ? LengthOfString<R, [...T, chart]>
  : T["length"];
