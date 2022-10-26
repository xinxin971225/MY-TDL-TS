type CurryingFN<A, R> = A extends [infer F, ...infer E]
  ? (a: F) => CurryingFN<E, R>
  : R;

declare function Currying<T>(
  fn: T
): T extends (...arg: infer A) => infer R
  ? A["length"] extends 0
    ? () => R
    : CurryingFN<A, R>
  : never;
