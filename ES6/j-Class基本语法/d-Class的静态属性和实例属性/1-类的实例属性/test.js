/*
(1) 类的实例属性
类的实例属性可以用等式，写入类的定义之中。
 */
class MyClass {
    myProp = 42;

    constructor() {
        console.log(this.myProp); // 42
    }
}
/*
上面代码中，myProp就是 MyClass的实例属性。在 MyClass的实例上，可以读取这个属性。
 */

/*
以前，我们定义实例属性，只能写在类的 constructor方法里面。
 */
class ReactCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
}
/*
上面代码中，构造方法 constructor里面，定义了 this.state属性。
 */

/*
有了新的写法以后，可以不在 constructor方法里面定义。
 */
class ReactCounter extends React.Component {
    state = {
        count: 0
    }
}
/*
这种写法比以前更清晰。
 */

/*
为了可读性的目的，对于那些在 constructor里面已经定义的实例属性，新写法允许直接列出。
 */
class ReactCounter extends React.Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
}






