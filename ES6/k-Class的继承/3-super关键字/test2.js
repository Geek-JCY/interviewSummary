/*
第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
 */
class A {
    p() {
        return 2;
    }
}
class B extends A {
    constructor() {
        super();
        console.log(super.p());
    }
}

let b = new B();
/*
上面代码中，子类 B当中的 super.p()，就是将 super当作一个对象使用。
这时，super在普通方法之中，指向 A.prototype，所以 super.p()就相当于 A.prototype.p()。
 */

/*
这里需要注意，由于 super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过 super调用的。
 */
class A {
    constructor() {
        this.p = 2;
    }
}
class B extends A {
    get m() {
        return super.p;
    }
}

let b = new B();
b.m; // undefined
/*
上面代码中，p是父类 A实例的属性，super.p就引用不到它。
 */

/*
如果属性定义在父类的原型对象上，super就可以取到。
 */
class A {}
A.prototype.x = 2;

class B extends A {
    constructor(){
        super();
        console.log(super.x); // 2
    }
}

let b = new B();
/*
上面代码中，属性x 是定义在 A.prototype上面的，所以 super.x可以取到它的值。
 */

