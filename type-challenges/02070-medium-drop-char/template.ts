type DropChar<S, C> = S extends `${infer F}${infer P}`
  ? F extends C
    ? `${DropChar<P, C>}`
    : `${F}${DropChar<P, C>}`
  : "";
