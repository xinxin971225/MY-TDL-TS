type RequiredByKeys<T, K extends keyof any = keyof T> = ToObj<
  Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>
>;
