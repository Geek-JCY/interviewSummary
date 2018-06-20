/*
静态方法也是可以从 super对象上调用的。
 */
class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';
    }
}

Bar.classMethod(); // 'hello, too'
