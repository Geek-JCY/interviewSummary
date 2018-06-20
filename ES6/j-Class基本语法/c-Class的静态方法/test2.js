/*
注意，如果静态方法包含 this关键字，这个 this指的是类，而不是实例。
 */
class Foo {
    static bar() {
        this.baz();
    }

    static baz() {
        console.log('hello');
    }

    baz() {
        console.log('world');
    }
}

Foo.bar(); // 'hello'
/*
上面代码中，静态方法 bar调用了 this.baz，这里的 this指的是 Foo类，而不是 Foo的实例，等同于调用 Foo.baz。
另外，从这个例子还可以看出，静态方法可以与非静态方法重名。
 */

