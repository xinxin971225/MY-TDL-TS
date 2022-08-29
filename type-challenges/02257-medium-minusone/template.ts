type MinusOne<T extends number, U extends any[] = []> = T extends U["length"]
  ? U extends [infer R, ...infer F]
    ? F["length"]
    : never
  : MinusOne<T, [0, ...U]>;
