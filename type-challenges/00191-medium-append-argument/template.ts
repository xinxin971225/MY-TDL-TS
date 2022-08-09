type AppendArgument<Fn, A> = Fn extends (...arg: infer AR) => infer R
  ? (...arg: [...AR, A]) => R
  : never;
