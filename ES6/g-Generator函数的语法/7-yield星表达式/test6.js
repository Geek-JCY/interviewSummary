/*
如果 yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。
 */
function* gen(){
    yield* ['a', 'b', 'c'];
}

gen().next(); // { value:"a", done:false }
/*
上面代码中，yield命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器对象。
 */

/*
实际上，任何数据结构只要有 Iterator 接口，就可以被 yield*遍历。
 */
let read = (function* (){
    yield 'hello';
    yield* 'hello';
})();

console.log( read.next().value ); // hello
console.log( read.next().value ); // h
/*
上面代码中，yield表达式返回整个字符串，yield*语句返回单个字符。
因为字符串具有 Iterator 接口，所以被 yield*遍历。
 */
