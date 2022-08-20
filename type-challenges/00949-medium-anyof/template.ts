type falsely = 0 | false | [] | "" | { [key: string]: never };

type AnyOf<T extends readonly any[]> = T[number] extends falsely ? false : true;

// {} 对于任何东西 extends {} 都为true
// 判断{} 需要用 {[key:string]:never}
