type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}`
  ? N
  : `${T}`;

// 把数字转换为字符串
// 判断有无-符合 有酒干掉
