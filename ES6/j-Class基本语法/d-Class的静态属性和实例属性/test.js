/*
13. Class 的静态属性和实例属性

静态属性指的是 Class 本身的属性，即 Class.propName，而不是定义在实例对象（this）上的属性。
 */
class Foo {
}

Foo.prop = 1; 
console.log(Foo.prop); // 1
/*
上面的写法为 Foo类定义了一个静态属性prop。

目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。
 */
// 以下两种写法都无效
class Foo {
    // 写法一
    prop: 2,

    // 写法二
    static prop: 2
}

Foo.prop // undefined

/*
目前有一个静态属性的提案，对 实例属性 和 静态属性 都规定了新的写法。
 */

