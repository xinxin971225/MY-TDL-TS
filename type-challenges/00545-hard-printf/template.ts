type TulipToFn<T extends any[], R extends any = string> = T extends [
  ...infer F,
  infer P
]
  ? P extends "d"
    ? TulipToFn<F, (d1: number) => R>
    : P extends "s"
    ? TulipToFn<F, (s1: string) => R>
    : TulipToFn<F, R>
  : R;

type Format<
  T extends string,
  R extends string[] = []
> = T extends `${infer F}%${infer M}${infer P}`
  ? M extends "%"
    ? Format<P, R>
    : Format<P, [...R, M]>
  : TulipToFn<R>;

/**
 * 思路
 * 将字符串遍历，获取符合%后的第一个字符串，符合规则就存到数组中
 * 最后将数组由后往前便利生成方法
 */
