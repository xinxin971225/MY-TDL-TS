type MyAwaited<T extends Promise<any>> = T extends Promise<infer Y>
  ? Y extends Promise<any>
    ? MyAwaited<Y>
    : Y
  : never;

// infer 可以声明一个变量
// 但是只能用在条件判断语句
