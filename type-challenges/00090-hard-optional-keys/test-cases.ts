import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, "b">>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, "b">>,
  Expect<
    Equal<
      OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
      "b" | "c" | "d"
    >
  >,
  Expect<Equal<OptionalKeys<{}>, never>>
];

type cases2 = [
  Expect<Equal<MyOptionalKeys<{ a: number; b?: string }>, "b">>,
  Expect<Equal<MyOptionalKeys<{ a: undefined; b?: undefined }>, "b">>,
  Expect<
    Equal<
      MyOptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
      "b" | "c" | "d"
    >
  >,
  Expect<Equal<MyOptionalKeys<{}>, never>>
];
