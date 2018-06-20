/*
下面是另一个例子，修改属性描述对象的 enumerable属性，使得该属性不可遍历。
 */
class Person {
    @nonenumerable
    get kidCount() { return this.children.length; }
}

function nonenumerable(target, name, descriptor){
    descriptor.enumerable = false;
    return descriptor;
}


