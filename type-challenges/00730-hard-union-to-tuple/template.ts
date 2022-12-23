type UnionToFnInserction<T> = (
  T extends any ? (arg: () => T) => any : never
) extends (arg: infer P) => any
  ? P
  : never;

type UnionToTuple<
  T,
  A extends any[] = []
> = UnionToFnInserction<T> extends () => infer R
  ? UnionToTuple<Exclude<T, R>, [R, ...A]>
  : A;
