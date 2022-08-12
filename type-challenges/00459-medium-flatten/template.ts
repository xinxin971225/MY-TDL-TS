type Flatten<T extends unknown[]> = T extends [infer R, ...infer P]
  ? R extends unknown[]
    ? [...Flatten<R>, ...Flatten<P>]
    : [R, ...Flatten<P>]
  : [];
