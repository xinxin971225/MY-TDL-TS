type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;
