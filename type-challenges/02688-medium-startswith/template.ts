type StartsWith<T extends string, U extends string> = U extends ""
  ? true
  : T extends `${infer F}${infer R}`
  ? U extends `${infer S}${infer P}`
    ? F extends S
      ? StartsWith<R, P>
      : false
    : false
  : false;
