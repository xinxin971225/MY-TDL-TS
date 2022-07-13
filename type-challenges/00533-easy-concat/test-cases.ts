import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >,
  Expect<Equal<first<[1, 2, 3, 4]>, 1>>,
  Expect<Equal<first<[1]>, 1>>,
  Expect<Equal<tail1<[1, 2, 3, 4]>, 4>>,
  Expect<Equal<tail1<[4]>, 4>>
];
