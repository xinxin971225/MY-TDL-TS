type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer P}`
  ? F
  : `${T}`;
