type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<U, T>>]
  : never;

// [T] extends [never] 判断参数为空
// Permutation<Exclude<U, T> 剔除当前内容并迭代
