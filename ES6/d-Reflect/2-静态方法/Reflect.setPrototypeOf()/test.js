/*
Reflect.setPrototypeOf(obj, newProto)
Reflect.setPrototypeOf方法用于设置对象的__proto__属性，返回第一个参数对象，对应 Object.setPrototypeOf(obj, newProto)。
 */
const myObj = new FancyThing();
// 旧写法
Object.setPrototypeOf(myObj, OtherThing.prototype);
// 新写法
Reflect.setPrototypeOf(myObj, OtherThing.prototype);

/*
如果第一个参数不是对象，Object.setPrototypeOf会返回第一个参数本身，而 Reflect.setPrototypeOf会报错。
 */
Object.setPrototypeOf(1, {}) 
// 1
Reflect.setPrototypeOf(1, {})
// TypeError: Reflect.setPrototypeOf called on non-object

/*
如果第一个参数是undefined或null，Object.setPrototypeOf和 Reflect.setPrototypeOf都会报错。
 */
Object.setPrototypeOf(null, {});
// TypeError: Object.setPrototypeOf called on null or undefined
Reflect.setPrototypeOf(null, {});
// TypeError: Reflect.setPrototypeOf called on non-object



