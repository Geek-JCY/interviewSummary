/*
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
如果在一个方法前，加上 static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
 */
class Foo {
    static classMethod() {
        return 'hello';
    }
}

Foo.classMethod();  // 'hello'

var foo = new Foo();
foo.classMethod();
// TypeError: foo.classMethod is not a function
/*
上面代码中，Foo类的 classMethod方法前有 static关键字，表明该方法是一个静态方法，
可以直接在 Foo类上调用（Foo.classMethod()），而不是在 Foo类的实例上调用。
如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。
 */


