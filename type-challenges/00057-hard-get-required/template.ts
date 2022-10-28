type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};

/**
 * 对象属性必须属性是extends？属性的
 * 但是反过来不行
 * 所以可以通过带？的属性是不是extends 不带？去过滤掉带？的属性
 */

//  type testa1 ={ foo: undefined; bar?: undefined }
//  type testa2 ={ foo: undefined; bar: undefined }
//  type testa = testa2['bar'] extends testa1['bar']?true:false
