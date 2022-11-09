type BasicGetComputed<T> = {
  [p in keyof T]: T[p] extends () => infer R ? R : never;
};

type Constructor = new (...args: any) => any;
type ConstructorMap<T> = T extends undefined
  ? any
  : T extends StringConstructor
  ? string
  : T extends NumberConstructor
  ? number
  : T extends RegExpConstructor
  ? RegExp
  : T extends BooleanConstructor
  ? boolean
  : T extends Constructor[]
  ? ConstructorMap<T[number]>
  : T extends { prototype: infer P }
  ? P
  : any;

type BasicGetProps<T> = {
  [p in keyof T]: T[p] extends { type: infer Type }
    ? ConstructorMap<Type>
    : ConstructorMap<T[p]>;
};
interface HardBasicOptions<P, D, C, M> {
  props: P;
  data(this: BasicGetProps<P>): D;
  computed: C & ThisType<D & C & BasicGetProps<P>>;
  methods: M & ThisType<M & D & GetComputed<C> & BasicGetProps<P>>;
}

declare function VueBasicProps<P, D, C, M>(
  options: HardBasicOptions<P, D, C, M>
): any;
