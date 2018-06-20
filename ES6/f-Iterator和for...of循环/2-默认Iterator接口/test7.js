/*
下面是另一个类似数组的对象调用数组的 Symbol.iterator方法的例子。
 */
let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for(let item of iterable){
    console.log(item);  // 'a', 'b', 'c'
}

/*
注意，普通对象部署数组的 Symbol.iterator方法，并无效果。
 */
let iterable = {
  a: 'a',
  b: 'b',
  c: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // undefined, undefined, undefined
}


