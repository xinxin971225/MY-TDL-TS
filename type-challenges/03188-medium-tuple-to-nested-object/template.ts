type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? F extends string
    ? {
        [P in F]: TupleToNestedObject<R, U>;
      }
    : never
  : U;
