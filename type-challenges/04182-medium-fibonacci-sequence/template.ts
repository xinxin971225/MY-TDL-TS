type Fibonacci<
  T extends number,
  Now extends any[] = [0],
  N1 extends any[] = [],
  Time extends any[] = [0]
> = T extends Time["length"]
  ? Now["length"]
  : Fibonacci<T, [...Now, ...N1], Now, [...Time, 0]>;
