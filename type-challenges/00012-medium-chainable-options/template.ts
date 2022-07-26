type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V>(
    key: K,
    value: T[K] extends V ? never : V
  ): Chainable<Pick<T, Exclude<keyof T, K>> & { [P in K]: V }>;
  get(): T;
};

/**
 * 通过{ [P in K]: V } 构建对象
 * 通过 Pick<T, Exclude<keyof T, K>> & 去合并每次新进来的对象
 * T[K] extends V ? never : V 约束已有的熟悉
 * Chainable<T extends Record<string, unknown> = Record<never, unknown>> 受参，方便递归调用
 */
