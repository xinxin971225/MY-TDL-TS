// type DeepPick<O, T> = {
//   [P in keyof O as P extends T ? P : never]: O[P];
// } & ("" extends T ? unknown : never);

type MyUnionToIntersection<Type> = (
  Type extends any ? (wrapper: Type) => unknown : never
) extends (wrapper: infer UnwrappedType) => unknown
  ? UnwrappedType
  : never;

type DeepPick<Type, Path extends string> = MyUnionToIntersection<
  "" extends Path
    ? unknown
    : Path extends `${infer Current}.${infer Rest}`
    ? { [Key in Current & keyof Type]: DeepPick<Type[Key], Rest> }
    : Pick<Type, Path & keyof Type>
>;
