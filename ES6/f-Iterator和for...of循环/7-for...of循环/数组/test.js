/*
数组

数组原生具备 iterator接口（即默认部署了 Symbol.iterator属性），
for...of 循环本质上就是调用这个接口产生的遍历器，可以用下面的代码证明。
 */
const arr = ['red', 'green', 'blue'];

for(let v of arr){
    console.log(v); // red green blue
}

const obj = {};
// obj[Symbol.iterator] = arr[Symbol.iterator].bind([1, 2, 3]);
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
for(let v of obj){
    console.log(v);
}
/*
上面代码中，空对象 obj部署了数组 arr的 Symbol.iterator属性，结果 obj的 for...of循环，产生了与 arr完全一样的结果。
 */



