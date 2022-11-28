type Enum<
  T extends readonly string[],
  N extends boolean = false,
  E extends Record<string, string | number> = {},
  count extends any[] = []
> = T extends readonly [infer R extends string, ...infer P extends string[]]
  ? N extends true
    ? Enum<P, N, E & Record<Capitalize<R>, count["length"]>, [...count, 0]>
    : Enum<P, N, E & Record<Capitalize<R>, R>, [...count, 0]>
  : Readonly<E>;

/**
 * readonly 与不 readonly 的内容不相互 extends
 *
 */
