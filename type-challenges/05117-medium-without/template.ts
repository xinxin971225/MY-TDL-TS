type Without<T, U> = T extends [infer F, ...infer P]
  ? U extends any[]
    ? F extends U[number]
      ? [...Without<P, U>]
      : [F, ...Without<P, U>]
    : F extends U
    ? [...Without<P, U>]
    : [F, ...Without<P, U>]
  : [];
