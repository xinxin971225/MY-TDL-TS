type LowerLetterUnion = stringToUnion<"qwertyuiopasdfghjklzxcvbnm">;
type CapitalizeWords<
  S extends string,
  Flag extends boolean = true,
  Result extends string = ""
> = S extends `${infer F}${infer R}`
  ? F extends LowerLetterUnion
    ? Flag extends true
      ? CapitalizeWords<R, false, `${Result}${Uppercase<F>}`>
      : CapitalizeWords<R, false, `${Result}${F}`>
    : CapitalizeWords<R, true, `${Result}${F}`>
  : Result;

/**
 * 思路：
 * 截取字符串的第一个字符
 * 通过一个初始需要大写的标记Flag = true Uppercase当前截取的字母之后变为false
 * 当取到的下一个字符判断不是属于字母时Flag = true
 * 整个过程通过第三个参数对截取下来的字符进行拼接，最终截取完就返回
 */
