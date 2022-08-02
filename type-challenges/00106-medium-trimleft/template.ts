type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? TrimLeft<R>
  : S;

type TrimRight<S extends string> = S extends `${infer R}${" " | "\n" | "\t"}`
  ? TrimRight<R>
  : S;

type Trim<S extends string> = S extends
  | `${" " | "\n" | "\t"}${infer R}`
  | `${infer R}${" " | "\n" | "\t"}`
  ? Trim<R>
  : S;
