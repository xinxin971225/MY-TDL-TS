type IsUnion<T, U = T> = [T] extends [never]
  ? false
  : T extends U
  ? [Exclude<U, T>] extends [never]
    ? false
    : true
  : never;

// 通过 extends 对union 进行分布式条件类型迭代
// 如果 是union 对于union的迭代值去 Exclude 会返回一个union 否则返回never
