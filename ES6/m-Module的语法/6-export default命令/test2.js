/*
export default命令用在非匿名函数前，也是可以的。
 */
// export-default.js
export default function foo() {
  console.log('foo');
}
// 或者写成
function foo() {
  console.log('foo');
}
export default foo;
/*
上面代码中，foo函数的函数名 foo，在模块外部是无效的。加载的时候，视同匿名函数加载。
 */


