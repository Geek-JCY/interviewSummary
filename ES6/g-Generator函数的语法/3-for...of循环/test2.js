/*
利用 for...of 循环，可以写出遍历任意对象（object）的方法。
原生的 JavaScript 对象没有遍历接口，无法使用 for...of 循环，通过 Generator 函数为它加上这个接口，就可以用了。
 */
function* objectEntries() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}

/*
除了 for...of 循环以外，扩展运算符（...）、解构赋值 和 Array.from方法内部调用的，都是遍历器接口。
这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。
 */
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
console.log( [...numbers()] ) // [1, 2]

// Array.from 方法
console.log( Array.from(numbers()) ) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for(let n of numbers()){
    console.log(n);
}
// 1
// 2



