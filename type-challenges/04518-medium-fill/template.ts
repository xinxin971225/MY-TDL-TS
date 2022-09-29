type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  R extends unknown[] = []
> = GreaterThan<End, Start> extends true
  ? T extends [infer F, ...infer P]
    ? R["length"] extends Start
      ? Fill<P, N, Start, End, [...R, N]>
      : GreaterThan<R["length"], Start> extends true
      ? GreaterThan<End, R["length"]> extends true
        ? Fill<P, N, Start, End, [...R, N]>
        : Fill<P, N, Start, End, [...R, F]>
      : Fill<P, N, Start, End, [...R, F]>
    : R
  : T;

// 吧T一个个截取
// 用一个要返回的中间变量接截取内容
// 如果数组没长度了就返回R
// 如果还有长度就判断一下R的长度，如果长度大于等于Start那么截取出来的值换为N去填充
// 如果长度大于end了，那就接着填充F 填充到完
