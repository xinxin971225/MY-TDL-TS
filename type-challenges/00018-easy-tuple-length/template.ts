type Length<T extends readonly any[]> = T["length"];

// js
function myLength(array) {
  if (!Array.isArray(array)) {
    throw new Error("");
  }
  return array.length;
}

// 1.不是数组就报错
// 2.获取length
