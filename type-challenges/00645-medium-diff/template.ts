// type Diff<O, O1> = Exclude<keyof O | keyof O1, keyof (O | O1)>;
type Diff<O, O1> = {
  [P in Exclude<keyof (O & O1), keyof (O | O1)>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};

// 先获取 key的交集 keyof (O | O1)
// 获取 key 的并集 keyof (O & O1)
// Exclude不相交的部分，然后去O 或者O1中取出来
