/*
JavaScript原有的 for...in循环，只能获得对象的键名，不能直接获取键值。
ES6 提供 for...of循环，允许遍历获得键值。
 */
var arr = ['a', 'b', 'c', 'd'];

for(let a in arr){
    console.log(a); // 0 1 2 3 
}

for(let a of arr){
    console.log(a); // a b c d
}
/*
上面代码表明，for...in循环读取键名，for...of循环读取键值。
如果要通过 for...of循环，获取数组的索引，可以借助数组实例的e ntries方法和 keys方法（参见《数组的扩展》一章）。
 */

/*
for...of 循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟 for...in循环也不一样。
 */
let ary = [3, 5, 7];
ary.foo = ['hello'];

for(let i in ary){
    console.log(i) // 0 1 2 3
}

for(let i of ary){
    console.log(i); // 3 5 7 (只返回 具有数字索引的属性 ) 
}
/*
上面代码中，for...of循环不会返回数组 arr的 foo属性。
 */


