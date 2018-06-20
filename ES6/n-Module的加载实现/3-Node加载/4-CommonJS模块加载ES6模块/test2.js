/*
下面是另一个例子。
 */
// es.js
export let foo = { bar:'my-default' };
export {foo as bar};
export function f(){};
export class c {};

// cjs.js
const es_namespace = await import('./es');
// es_namespace = {
//   get foo() {return foo;}
//   get bar() {return foo;}
//   get f() {return f;}
//   get c() {return c;}
// }


