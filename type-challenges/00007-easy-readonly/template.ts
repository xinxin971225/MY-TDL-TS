type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// interface Todo {
//   a:string
//   b:string
// }

// type r = keyof Todo

// const rv:r = '' //这里会提示r有什么

// type User = {
//   readonly name:string
// }

// const xiaohong:User = {
//   name:'xiaohong'
// };

// xiaohong.name = '123';

function readonly(obj) {
  const result = {};

  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }

  return result;
}

// 1. 返回一个对象
// 2. 遍历obj （js对象 ts 接口） in->mapped  keyof->lookup
// 3. 加上readonly 关键字 新内容
// 4. 通过 key 来获取obj（接口）里面的值 index
