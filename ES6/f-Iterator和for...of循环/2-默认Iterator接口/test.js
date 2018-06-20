/*
Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即 for...of循环（详见下文）。
当使用 for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。
 */

/*
ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator属性，
或者说，一个数据结构只要具有 Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。
至于属性名 Symbol.iterator，它是一个表达式，返回 Symbol对象的 iterator属性，
这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内（参见《Symbol》一章）。
 */
const obj = {
    [Symbol.iterator] : function(){
        return {
            next: function(){
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
}
/*
上面代码中，对象 obj是可遍历的（iterable），因为具有 Symbol.iterator属性。
执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有 next方法。
每次调用 next方法，都会返回一个代表当前成员的信息对象，具有 value和 done两个属性。
 */






