type Shift<T> = T extends [infer R, ...infer F] ? F : never;
