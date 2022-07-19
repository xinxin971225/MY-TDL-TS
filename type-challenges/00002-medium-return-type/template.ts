type MyReturnType<T> = T extends (...arg: any[]) => infer returnVal
  ? returnVal
  : never;
