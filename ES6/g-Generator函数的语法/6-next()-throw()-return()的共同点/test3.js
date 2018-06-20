/*
return()是将 yield表达式替换成一个 return语句。
 */
const g = function* (x,y) {
    let result = yield x + y;
    return result;
}

const gen = g(1, 2);

console.log( gen.next() ); // Object {value: 3, done: false}
console.log( gen.return(2) ); // Object {value: 2, done: true}

// 相当于将 let result = yield x + y
// 替换成 let result = return 2;


