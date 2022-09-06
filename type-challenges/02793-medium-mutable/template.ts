type Mutable<T extends Readonly<Record<string, any>>> = {
  -readonly [P in keyof T]: T[P];
};
