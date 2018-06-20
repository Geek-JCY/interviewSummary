/*
结合数组的 map 方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。
 */
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
console.log(map1);  
// Map { 1 => 'a', 2 => 'b' }

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
);
console.log(map2);
// Map {2 => '_a', 4 => '_b', 6 => '_c'}


