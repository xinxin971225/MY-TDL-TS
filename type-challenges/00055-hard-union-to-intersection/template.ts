type UnionToIntersection<U> = (
  U extends infer R ? (x: R) => any : never
) extends (x: infer V) => any
  ? V
  : never;

/**
 *  U extends infer R ? (x: R) => any : never
 *  U = a | b | c
 *  output:  (x: a) => any| (x: b) => any| (x: c) => any
 *  T extends (x: infer V) => any ? V : never
 *  T =  (x: a) => any| (x: b) => any| (x: c) => any
 *  output: a & b & c
 */
