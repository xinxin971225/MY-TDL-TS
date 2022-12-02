type DeepObjectToUniq<O extends object, U extends any[] = []> = {
  [x: symbol]: U;
} & {
  [P in keyof O]: O[P] extends object ? DeepObjectToUniq<O[P], [O, P]> : O[P];
};

/**
 * 题意是对对象深拷贝，同时类型又兼容
 * 处理方式是对每个每个对象都加一个symbol值，理论上他们内容不相等，但是类型是兼容的
 */
