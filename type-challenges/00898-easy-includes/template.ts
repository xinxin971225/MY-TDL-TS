import { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer R
]
  ? Equal<First, U> extends true
    ? true
    : Includes<R, U>
  : false;

// type abc<T extends readonly any[]> = T[number]
// type t4 = abc<[boolean, 2, 3, 5, 6, 7]>
// type t5 = true extends boolean ?true:false
// js ->includes
