# ts练习

根据问题炼ts
[antfu的ts题库](https://github.com/type-challenges/type-challenges)

## 环境搭建

pnpm add typescript 

pnpm add @type-challenges/utils

npx tsc init

## 姿势点总结

- union -> ts中的一种数据结构 ‘a|b|c’ 就是一个或的集合
- in -> 可以去匹配每一个union内部单个的值
- keyof -> lookup 可以将一个对象的key集合成一个union 可以配合in 去遍历union
- extends -> 在参数里是类型限制，在返回值里是3元运算的条件判断
- `T[number]` -> 可以将array 转为 union
- `as const` -> 写在声明后面就变成完全约束，而不只是数据类型
- typeof -> 在ts中可以将声明的变量的类型取出
- `T[length]` -> T为数组时，可以通过length取到长度
- `...` -> ts中支持对数组进行解构
- infer -> 在条件判断语句中声明一个泛型变量供后面使用
- 两个union之间extends 会依次对比每一个值并返回一个新的union
- 虽然extends作为参数约束的时候，内部的一些内容无法直接引用，但可以在条件判断的时候再声明一次，去infer你需要的变量