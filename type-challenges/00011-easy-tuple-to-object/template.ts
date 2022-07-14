type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// keyof array  -> 索引
type r = TupleToObject<typeof tuple>;
// const r = typeof tuple

// js

function tupleToObject(array) {
  //  array 里面的key不是普通类型就报错
  const isError = array.some((i) => {
    const type = typeof i;
    if (!["string", "number", "symbol"].includes(type)) {
      return true;
    }
    return false;
  });
  if (isError) {
    throw new Error("");
  }
  const obj = {};
  array.forEach((element) => {
    obj[element] = element;
  });
  return obj;
}

// 1. 返回一个对象
// 2. 遍历array
