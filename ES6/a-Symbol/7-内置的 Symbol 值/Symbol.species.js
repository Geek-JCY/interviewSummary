/*
对象的 Symbol.species 属性，指向一个构造函数。创建衍生对象时，会使用该属性。
 */
// class MyArray extends Array {}
// const a = new MyArray();
// console.log( a.map(x => x) instanceof MyArray );   // true
/*
上面代码中，子类MyArray继承了父类Array。
a.map(x => x)会创建一个MyArray的衍生对象，该衍生对象还是MyArray的实例。
 */

class MyArray2 extends Array {
    static get [Symbol.species]() { return Array; };
};

const a = new MyArray2();
console.log( a.map(x => x) instanceof MyArray2 );  // false
console.log( a.map(x => x) instanceof Array ); // true