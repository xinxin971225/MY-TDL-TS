type KebabCase<S> = S extends `${infer R}${infer F}`
  ? F extends Uncapitalize<F>
    ? `${Uncapitalize<R>}${KebabCase<F>}`
    : `${Uncapitalize<R>}-${KebabCase<F>}`
  : S;

// Uncapitalize 首字母小写
// 先剔除第一个字母，后面遇到首字母大写的就加个-然后丢给KebabCase
