/*
CommonJS 模块加载 ES6 模块 

CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。
ES6 模块的所有输出接口，会成为输入对象的属性。
 */
// es.mjs
let foo = {bar:'my-default'};
export default foo;
foo = null;

// cjs.js
const es_namespace = await import('./es');
// es_namespace = {
//   get default() {
//     ...
//   }
// }
console.log(es_namespace.default);
// { bar:'my-default' }
/*
上面代码中，default接口变成了es_namespace.default属性。
另外，由于存在缓存机制，es.mjs对foo的重新赋值没有在模块外部反映出来。
 */




