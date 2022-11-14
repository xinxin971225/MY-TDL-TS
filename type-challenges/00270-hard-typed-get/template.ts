type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer A}.${infer B}`
  ? A extends keyof T
    ? Get<T[A], B>
    : never
  : never;
