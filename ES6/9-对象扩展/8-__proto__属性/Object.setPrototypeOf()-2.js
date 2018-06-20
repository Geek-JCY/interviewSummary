// 例子：
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x;  // 10
obj.y;  // 20
obj.z;  // 30
console.log( obj.x );
console.log( obj.y );
console.log( obj.z );
/*
上面代码将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性。
 */






/*
    如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。
 */
Object.setPrototypeOf(1, {}) === 1 // true
Object.setPrototypeOf('foo', {}) === 'foo' // true
Object.setPrototypeOf(true, {}) === true // true
/*
    由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。
*/
Object.setPrototypeOf(undefined, {})
// TypeError: Object.setPrototypeOf called on null or undefined

Object.setPrototypeOf(null, {})
// TypeError: Object.setPrototypeOf called on null or undefined