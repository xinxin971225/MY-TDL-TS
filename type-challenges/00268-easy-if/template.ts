type If<C extends boolean, T, F> = C extends true ? T : F;

// js
function ifFunc(truthy, trueVal, falseVal) {
  if (typeof truthy !== "boolean") {
    throw new Error("");
  }
  return truthy ? trueVal : falseVal;
}
