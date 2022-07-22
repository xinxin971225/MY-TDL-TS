type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, any>
    ? T[P] extends () => {}
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P];
};

// 递归DeepReadonly<T[P]> 遍历P in keyof T
