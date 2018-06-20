/*
对象的 Symbol.split 属性，指向一个方法，
当该对象被 string.prototype.split 方法调用时，会返回该方法的返回值。
 */
// String.prototype.split(separator, limit)
// 等同于
// separator[Symbol.split](this, limit)

// 下面是一个例子
class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}

console.log( 'foobar'.split(new MySplitter('foo')) );
console.log( 'foobar'.split(new MySplitter('bar')) );
console.log( 'foobar'.split(new MySplitter('baz')) );
/*
上面方法使用Symbol.split方法，重新定义了字符串对象的split方法的行为，
 */
