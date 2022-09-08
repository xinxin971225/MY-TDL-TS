type ObjectEntries<T, R = Required<T>> = {
  [P in keyof R]: [P, [R[P]] extends [never] ? undefined : R[P]];
}[keyof R];
