/*
（2）类的静态属性

类的静态属性只要在上面的实例属性写法前面，加上 static关键字就可以了。
 */
class MyClass {
    static myStaticProp = 42;

    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }
}

/*
同样的，这个新写法大大方便了静态属性的表达。
 */
// 老写法
class Foo {
    // ....
}
Foo.prop = 1;

// 新写法
class Foo {
    static prop = 1;
}
/*
上面代码中，老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。
这样让人很容易忽略这个静态属性，也不符合相关代码应该放在一起的代码组织原则。
另外，新写法是显式声明（declarative），而不是赋值处理，语义更好。
 */


