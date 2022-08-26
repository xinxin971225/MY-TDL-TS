type PlusOrMinus = "+" | "-";

type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
  ? L extends PlusOrMinus
    ? [L, ...(R extends `${infer N}%` ? [N, "%"] : [R, ""])]
    : ["", ...(A extends `${infer N}%` ? [N, "%"] : [A, ""])]
  : ["", "", ""];

// type CheckPrefix<S extends string> = S extends '+' | '-' ? S : never
// type CheckSuffix<S extends string> = S extends `${infer L}%` ? [L, '%'] : [S, '']

// type PercentageParser<S extends string> =
//   S extends `${CheckPrefix<infer L>}${infer R}`
//     ? [L, ...CheckSuffix<R>]
//     : ['', ...CheckSuffix<S>]
