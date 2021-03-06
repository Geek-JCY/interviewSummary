/*
对象的 Symbol.replace 属性，指向一个方法，
当该对象被 String.prototype.replace 方法调用时，会返回该方法的返回值
 */
// String.prototyp.replace(searchValue, replaceValue);
// 等同于
// searchValue[Symbol.replace](this, replaceValue);

// 下面一个例子
const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World');    // ['Hello', 'World']
/*
Symbol.replace方法会收到两个参数，第一个参数是replace方法正在作用的对象，
上面例子是Hello，第二个参数是替换后的值，上面例子是World。
 */
