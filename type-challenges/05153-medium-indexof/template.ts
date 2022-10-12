import { Equal } from "@type-challenges/utils";

export type IndexOf<T, U, S extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Equal<F, U> extends true
    ? S["length"]
    : IndexOf<R, U, [...S, 0]>
  : -1;
