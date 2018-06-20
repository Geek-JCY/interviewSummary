/*
    注意: rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
 */
// 报错
function f(a, ...b, c) {
  // ...
}

/*
    函数的length属性，不包括 rest 参数。
 */
(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1