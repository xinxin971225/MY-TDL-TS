type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer P}${From}${infer R}`
  ? From extends ""
    ? S
    : `${P}${To}${R}`
  : S;
