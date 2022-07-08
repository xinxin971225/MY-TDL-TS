type MyExclude<T, U> = T extends U ? never : T;

// js
// ['a','b','c']
// ['a']
function myExclude(union, excludeMb: any[]) {
  const arr: any[] = [];
  union.forEach((element) => {
    if (!excludeMb.includes(element)) {
      arr.push(element);
    }
  });
  return arr;
}
