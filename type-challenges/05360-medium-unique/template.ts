// type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
//   ? 1
//   : 2
//   ? true
//   : false;

import { IndexOf } from "../05153-medium-indexof/template";

// type IsInclude<A, T> = A extends [infer AF, ...infer AP]
//   ? IsEqual<AF, T> extends true
//     ? true
//     : IsInclude<AP, T>
//   : false;

export type Unique<T, A extends any[] = []> = T extends [infer F, ...infer P]
  ? IndexOf<A, F> extends -1
    ? Unique<P, [...A, F]>
    : Unique<P, A>
  : A;
