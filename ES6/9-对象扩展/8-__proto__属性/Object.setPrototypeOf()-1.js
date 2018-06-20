/*
    * Object.setPrototypeOf() 
    Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。
*/
// 格式
Object.setPrototypeOf(object, prototype)

// 用法
const o = Object.setPrototypeOf({}, null);

// 该方法等同于下面的函数。
function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}