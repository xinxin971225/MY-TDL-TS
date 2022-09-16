type FlattenDepth<T, F = 1, U extends any[] = []> = T extends [
  infer R,
  ...infer P
]
  ? U["length"] extends F
    ? T
    : R extends any[]
    ? [...FlattenDepth<R, F, [0, ...U]>, ...FlattenDepth<P, F>]
    : [R, ...FlattenDepth<P, F, U>]
  : T;
