/*
Reflect.getPrototypeOf(obj)
Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应 Object.getPrototypeOf(obj)。
 */
const myObj = new FancyThing();
// 旧写法
Object.getPrototypeOf(myObj) === FancyThing.prototype;
// 新写法
Reflect.getPrototypeOf(myObj) === FancyThing.prototype;

/*
Reflect.getPrototypeOf和 Object.getPrototypeOf的一个区别是，
如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，而 Reflect.getPrototypeOf会报错。
 */
Object.getPrototypeOf(1) // Number {[[PrimitiveValue]]: 0}
Reflect.getPrototypeOf(1) // 报错