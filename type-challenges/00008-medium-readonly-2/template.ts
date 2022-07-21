type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P];
};

// 需要去剔除掉T中需要readonly的属性 采用Omit 再去合并才能出正常结果
