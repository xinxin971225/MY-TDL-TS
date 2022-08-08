type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer E}`
  ? `${F}${To}${ReplaceAll<`${E}`, From, To>}`
  : S;
