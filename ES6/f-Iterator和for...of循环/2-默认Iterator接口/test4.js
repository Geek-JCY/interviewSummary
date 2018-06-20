/*
下面是通过遍历器实现指针结构的例子。
 */
function Obj(value){
    this.value = value;
    this.next = null;
}

Obj.prototype[Symbol.iterator] = function(){
    var iterator = { next: next };

    var current = this;

    function next(){
        if(current){
            var value = current.value;
            current = current.next;
            return {done:false, value:value};
        } else {
            return {done: true}
        }
    }
    return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for(var i of one){
    console.log(i); // 1 2 3 
}

/*
上面代码首先在构造函数的原型链上部署 Symbol.iterator方法，
调用该方法会返回遍历器对象 iterator，调用该对象的 next方法，在返回一个值的同时，自动将内部指针移到下一个实例。
 */



