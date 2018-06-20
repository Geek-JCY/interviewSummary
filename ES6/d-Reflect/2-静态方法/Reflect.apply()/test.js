/*
Reflect.apply(func, thisArg, args)
Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
 */
/*
一般来说，如果要绑定一个函数的 this对象，可以这样写 fn.apply(obj, args)，
但是如果函数定义了自己的 apply方法，就只能写成 Function.prototype.apply.call(fn, obj, args)，
采用Reflect对象可以简化这种操作。
 */
const ages = [11, 33, 12, 54, 18, 96];
// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);

console.log(youngest);  // 11
console.log(oldest);    // 96
console.log(type);      // [object Number]

// 新写法
const youngest2 = Reflect.apply(Math.min, Math, ages);
const oldest2 = Reflect.apply(Math.max, Math, ages);
const type2 = Reflect.apply(Object.prototype.toString, youngest2, []);

console.log(youngest2); // 11
console.log(oldest2);   // 96
console.log(type2);     // [object Number]


