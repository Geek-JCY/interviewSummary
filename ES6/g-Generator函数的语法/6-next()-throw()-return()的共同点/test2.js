/*
throw()是将 yield表达式替换成一个 throw语句。
 */
const g = function* (x,y) {
    let result = yield x + y;
    return result;
}

const gen = g(1, 2);
console.log( gen.next() ); // Object {value: 3, done: false}

gen.throw(new Error('出错了')); // Uncaught Error: 出错了

// 相当于将 let result = yield x + y
// 替换成 let result = throw(new Error('出错了'));


