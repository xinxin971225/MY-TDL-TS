type IsAny<T> = (<F>() => F extends T ? 1 : 2) extends <F>() => F extends any
  ? 1
  : 2
  ? true
  : false;

// like Equal from @type-challenges/utils
