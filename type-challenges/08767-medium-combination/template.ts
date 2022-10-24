type Combinator<S extends string, U extends string = "", K = S> = [S] extends [
  never
]
  ? U
  : K extends S
  ? Combinator<Exclude<S, K>, U | `${U} ${K}`>
  : U;

type Combination<T extends string[]> = Trim<Exclude<Combinator<T[number]>, "">>;
