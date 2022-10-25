type GetComputed<T> = {
  [p in keyof T]: T[p] extends () => infer R ? R : never;
};
interface Options<D, C, M> {
  data(this: void): D;
  computed: C & ThisType<D & C>;
  methods: M & ThisType<M & D & GetComputed<C>>;
}

declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any;
