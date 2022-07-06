import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// const let js 世界
// type interface type 世界

// type r = typeof tuple
// // 1. 字面量类型
// let str = '123'

// type s =  typeof str

// const strConst = '1233'
// type sc = typeof strConst

// 1. typeof js->ts
// 2. 字面量类型 as const
