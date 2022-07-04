// ts 联合类型 union

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js
// 对比学习

function myPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

// 1.返回一个对象
// 2.遍历foreach
// 3.todo 取值 类型：indexed
// 4.看看key在不在todo里面
//   1.keyof =>lookup
//   2.extends
