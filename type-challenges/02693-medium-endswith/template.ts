type EndsWith<T extends string, U extends string> = U extends ""
  ? true
  : T extends U
  ? true
  : T extends `${infer P}${infer S}`
  ? S extends ""
    ? false
    : S extends U
    ? true
    : EndsWith<S, U>
  : never;
