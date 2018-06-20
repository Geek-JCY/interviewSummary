/*
由于 Iterator 只是把接口规格加到数据结构之上，
所以，遍历器与它所遍历的那个数据结构，实际上是分开的，完全可以写出没有对应数据结构的遍历器对象，
或者说用遍历器对象模拟出数据结构。

下面是一个无限运行的遍历器对象的例子。
 */
var it = idMaker(); //--------> 0


it.next().value // 0
it.next().value // 1
it.next().value // 2

function idMaker(){
    var index = 0;
    console.log('-------->',index);
    return {
        next: function(){
            console.log(index);
            return {value: index++, done: false}
        }
    }
}

/*
上面的例子中，遍历器生成函数idMaker，返回一个遍历器对象（即指针对象）。
但是并没有对应的数据结构，或者说，遍历器对象自己描述了一个数据结构出来。
 */



