type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type first<T extends unknown[]> = T extends [infer F, ...infer P] ? F : never;
type tail1<T extends unknown[]> = T extends [...infer F, infer P] ? P : never;
