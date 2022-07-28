type Pop<T extends any[]> = T extends [...infer F, infer P] ? F : never;
