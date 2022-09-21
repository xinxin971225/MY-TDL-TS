type stringToUnion<S extends string> = S extends `${infer F}${infer P}`
  ? F | stringToUnion<P>
  : "";

type Combination<S extends string, U extends string = "", K = S> = [S] extends [
  never
]
  ? U
  : K extends S
  ? Combination<Exclude<S, K>, U | `${U}${K}`>
  : U;

// 'a'|'b'|'c' ''
// 'b'|'c'  ''| 'a'
// 'c' ''| 'a'|{''|'a'}{'b'}
// 'b' ''| 'a'|{''|'a'}{'c'}
// 'a'|'b'|'c' ''
// 'a'|'c'  ''| 'b'
// 'a' ''| 'b'|{''|'b'}{'a'}
// 'c' ''| 'b'|{''|'b'}{'c'}
// 'a'|'b'|'c' ''
// 'a'|'b'  ''| 'c'
// 'a' ''| 'c'|{''|'c'}{'a'}
// 'b' ''| 'c'|{''|'c'}{'b'}

type AllCombinations<S extends string> = Combination<StringToUnion<S>>;
