type IsNever<T> = T[] extends never[] ? true : false;

// 对于never这种特殊值的对比，需要包一层数组进行比对
