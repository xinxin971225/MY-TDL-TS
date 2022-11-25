type FilterOut<T extends any[], F, R extends any[] = []> = T extends [
  infer A,
  ...infer P
]
  ? [A] extends [F]
    ? FilterOut<P, F, R>
    : FilterOut<P, F, [...R, A]>
  : R;
