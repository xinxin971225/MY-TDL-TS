type ToObj<T> = {
  [P in keyof T]: T[P];
};
type PartialByKeys<T, K extends keyof any = keyof T> = ToObj<
  Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K>
>;
