import type { Equal } from "@type-challenges/utils";

export type LastIndexOf<T, U> = T extends [...infer F, infer R]
  ? Equal<R, U> extends true
    ? F["length"]
    : LastIndexOf<F, U>
  : -1;
