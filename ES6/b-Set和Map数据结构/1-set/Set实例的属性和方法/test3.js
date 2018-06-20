/*
Array.from方法可以将 Set 结构转为数组。
 */
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

// 这就提供了去除数组重复成员的另一种方法。
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]