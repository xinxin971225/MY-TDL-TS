type Chunk<
  A extends any[],
  C extends number,
  T extends any[] = []
> = T["length"] extends C
  ? [T, ...Chunk<A, C>]
  : A extends [infer F, ...infer R]
  ? Chunk<R, C, [...T, F]>
  : T["length"] extends 0
  ? []
  : [T];
/**
 * 借助一个空数组，每次都吧数组的第一个塞进去，然后把剩下的数组内容丢进去递归
 * 当新数组长度等于C的时候直接从剩下的数组继续处理
 * 值得注意当处理到最后一个数据时即A = [] 需要看看T的长度，因为退出的时候会进行结构，所以不能直接返回T
 */
