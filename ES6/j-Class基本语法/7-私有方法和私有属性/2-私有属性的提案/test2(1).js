/*
该提案只规定了私有属性的写法。但是，很自然地，它也可以用来写私有方法。
 */
class Foo {
    #a;
    #b;
    #sum(){ return #a + #b; }
    printSum() { console.log(#sum()); }
    constructor(a, b) { #a = a; #b = b; }
}
/*
上面代码中，#sum()就是一个私有方法。
 */

/*
另外，私有属性也可以设置 getter 和 setter 方法。
 */
class Counter {
    #xValue = 0;

    get #x() { return #xValue; }
    set #x(value) {
        this.#xValue = value;
    }

    constructor() {
        super();
        // ...
    }
}
/*
上面代码中，#x是一个私有属性，它的读写都通过 get #x()和 set #x()来完成。
 */

