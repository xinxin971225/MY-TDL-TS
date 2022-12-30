type MyJoin<D extends string, T extends string[]> = T extends [
  infer F extends string,
  ...infer P extends string[]
]
  ? `${F}${P extends [] ? "" : D}${MyJoin<D, P>}`
  : "";

declare function join<D extends string>(
  delimiter: D
): <T extends string[]>(...parts: T) => MyJoin<D, T>;
