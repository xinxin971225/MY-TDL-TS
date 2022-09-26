type Zip<A extends any[], B extends any[]> = A extends [infer F, ...infer L]
  ? B extends [infer H, ...infer D]
    ? [[F, H], ...Zip<L, D>]
    : []
  : [];
