/*
这个方法有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
 */
// Object.isExtensible(proxy) === Object.isExtensible(target)

// 下面是一个例子：
var p = new Proxy({}, {
    isExtensible: function(target){
        return false;
    }
});
console.log( Object.isExtensible({}) ); // true
console.log( Object.isExtensible(p) ); // 报错
