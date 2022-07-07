type First<T extends any[]> = T extends [] ? never : T[0];
type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];
type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First4<T extends any[]> = T extends [infer first, ...infer rest]
  ? first
  : never;

type tail<T extends any[]> = T extends [infer first, ...infer rest]
  ? rest
  : never;
type t = tail<[1, 2, 3, 4]>;
// T[number]
type num = [1, 2, 3];
type n1 = num[number];

// 如果是空数组 取出的【0】是undefined

// js
// 1
function first1(array) {
  const [first] = array;
  return first ? first : "never";
}

// 2
function first2(array) {
  // 空数组应该返回一个never
  return array[0];
}

// 3
function first3(array: []) {
  return array.slice(0, 1);
}

// 1. 通过extends类型条件判断
// 2. 获取tuple的length indexed
// 3. extends union 判断规则
// 4. inter的使用
