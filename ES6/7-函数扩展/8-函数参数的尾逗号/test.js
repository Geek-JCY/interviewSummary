/*
ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。
 */

// 也就是 说， ES2017
function clownsEverywhere(
  param1,
  param2,
) { /* ... */ }

clownsEverywhere(
  'foo',
  'bar',
);

// 第二个参数 可以有逗号