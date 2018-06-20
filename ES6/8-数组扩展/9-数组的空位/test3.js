/*
    ES6 则是明确将空位转为undefined。
*/

// Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。
Array.from(['a',,'b'])  // [ "a", undefined, "b" ]

// 扩展运算符（...）也会将空位转为undefined。
[...['a',,'b']] // [ "a", undefined, "b" ]

// copyWithin()会连空位一起拷贝
[,'a','b',,].copyWithin(2,0) // [,"a",,"a"]

// fill()会将空位视为正常的数组位置。
new Array(3).fill('a')  // ['a', 'a', 'a']

// for...of循环也会遍历空位。
let arr = [,,];
for(let i of arr){
    console.log(i);
}
// 1
// 1

// entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。
// entries()
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]

// keys()
[...[,'a'].keys()] // [0,1]

// values()
[...[,'a'].values()] // [undefined,"a"]

// find()
[,'a'].find(x => true) // undefined

// findIndex()
[,'a'].findIndex(x => true) // 0




