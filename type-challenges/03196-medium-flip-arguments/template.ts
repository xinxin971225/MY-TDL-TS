type FlipArguments<T extends Function> = T extends (...arg: infer A) => infer R
  ? (...arg: Reverse<A>) => R
  : never;
