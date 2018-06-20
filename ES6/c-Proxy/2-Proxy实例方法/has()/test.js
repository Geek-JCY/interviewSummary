/*
has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
 */
// 下面的例子使用has方法隐藏某些属性，不被in运算符发现。
var handler = {
    has(target, key){
        if (key[0] === '_') {
          return false;
        }
        return key in target;
    }
}

var target = {_prop:'foo', prop: 'foo'};
var proxy = new Proxy(target, handler);
'_prop' in proxy
console.log( '_prop' in proxy );    // false
console.log( 'prop' in proxy ); // true
/*
上面代码中，如果原对象的属性名的第一个字符是下划线，proxy.has就会返回false，从而不会被in运算符发现。
 */