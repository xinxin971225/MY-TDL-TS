type ControlsMap = {
  c: "char";
  s: "string";
  d: "dec";
  o: "oct";
  h: "hex";
  f: "float";
  p: "pointer";
};

type ParsePrintFormat<
  T extends string,
  Result extends any[] = []
> = T extends `${infer F}%${infer P}${infer R}`
  ? P extends keyof ControlsMap
    ? ParsePrintFormat<R, [...Result, ControlsMap[P]]>
    : ParsePrintFormat<R, Result>
  : Result;
