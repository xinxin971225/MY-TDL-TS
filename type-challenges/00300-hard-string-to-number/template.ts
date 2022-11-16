type StringNumberUnion = StringToUnion<"1234567890">;

type IsNumber<S extends string> = S extends `${infer A}${infer B}`
  ? A extends StringNumberUnion
    ? B extends ""
      ? true
      : IsNumber<B>
    : false
  : false;

type ToNumber<
  S extends string,
  A extends any[] = []
> = IsNumber<S> extends false
  ? never
  : `${A["length"]}` extends S
  ? A["length"]
  : ToNumber<S, [...A, 0]>;
