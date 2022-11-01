type OptionalKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

type MyOptionalKeys<T> = keyof GetOptional<T>;
