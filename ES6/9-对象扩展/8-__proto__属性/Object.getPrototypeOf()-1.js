/*
    Object.getPrototypeOf()
    该方法和 Object.setPrototypeOf() 方法配套， 用于读取一个对象的原型对象。
 */
// 例子：
function Rectangle() {
    // ......
}

const rec = new Rectangle();

Object.getPrototypeOf(rec) === Rectangle.prototype; // true
console.log( Object.getPrototypeOf(rec) === Rectangle.prototype );

Object.setPrototypeOf(rec, Object.prototype);
Object.getPrototypeOf(rec) === Rectangle.prototype;
console.log( Object.getPrototypeOf(rec) === Rectangle.prototype );  // false
console.log( Object.getPrototypeOf(rec) === Object.prototype );  // true