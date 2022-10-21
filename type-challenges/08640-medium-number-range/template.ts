type NumberRange<
  L extends number,
  H,
  A extends any[] = ConstructTuple<L>
> = A["length"] extends H
  ? H
  : A["length"] | NumberRange<L, H, [...A, unknown]>;
