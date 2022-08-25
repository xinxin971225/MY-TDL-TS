type NeverIndex<T> = string extends T
  ? never
  : number extends T
  ? never
  : symbol extends T
  ? never
  : T;

type RemoveIndexSignature<T> = {
  [P in keyof T as NeverIndex<P>]: T[P];
};

// 索引的特点是泛式的 有string number symbol 3 种
// 当key 是特定值当时候 可以extends 泛型但是反过来不行，利用这个特点就可以处理掉所有索引类型
