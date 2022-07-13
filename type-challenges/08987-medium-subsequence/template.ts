type Subsequence<T extends any[]> = T extends [infer P, ...infer R]
  ? [P, ...Subsequence<R>] | Subsequence<R>
  : [];

// js 涉及到特定公式

type a = Subsequence<[1, 2, 3, 4]>;
