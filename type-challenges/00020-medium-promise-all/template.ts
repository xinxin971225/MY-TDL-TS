/**
 * 把数组当作对象进行遍历
 * @param values
 */
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P];
}>;

// declare function PromiseAll<T extends any[]>(
//   values: readonly [...T]
// ): Promise<T[number] extends Promise<infer R>?R:T[number]>;
