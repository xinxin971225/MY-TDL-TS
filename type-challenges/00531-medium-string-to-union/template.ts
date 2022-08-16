type StringToUnion<T extends string> = T extends `${infer F}${infer P}`
  ? F | StringToUnion<P>
  : never;
