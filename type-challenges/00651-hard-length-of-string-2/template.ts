type LengthOfString2<
  S extends string,
  A extends any[] = []
> = S extends `${infer R}${infer P}`
  ? LengthOfString2<P, [...A, 0]>
  : A["length"];
