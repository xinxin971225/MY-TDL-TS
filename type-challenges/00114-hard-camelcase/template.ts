type ToCamelCase<
  S extends string,
  Result extends string = ""
> = S extends `${infer F}${infer R}`
  ? F extends "_"
    ? ToCamelCase<Capitalize<R>, Result>
    : ToCamelCase<R, `${Result}${F}`>
  : Result;

type CamelCase<S extends string> = ToCamelCase<Lowercase<S>>;

/**
 * 先把所有字符都转小写
 * 然后通过截取每一个字符判断后面的字符串是否需要截取掉当前字符并且首字母大写，
 * 其余字符均拼接回去
 */
