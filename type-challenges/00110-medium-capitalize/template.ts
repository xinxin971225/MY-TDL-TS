type MyCapitalize<S extends string> = S extends `${infer s}${infer r}`
  ? `${Uppercase<s>}${r}`
  : S;
