/*
    (3).遍历应用
 */
// 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
let set = new Set(['red', 'green', 'blue']);
let arr = [...set]; // ['red', 'green', 'blue']
console.log(arr);

// 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]
console.log(unique);

// 而且，数组的map和filter方法也可以间接用于 Set 了。
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2)); // 返回 Set 结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter( x => (x%2) == 0 ) ); // 返回 Set 结构：{2, 4}

// 因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set({1, 2, 3});
let b = new Set({4, 3, 2});
// 并集
let union = new Set([...a, ...b]);  // Set {1, 2, 3}
// 交集
let intersect = new Set([...a].filter( x => b.has(x) ) );   // Set {2, 3}
// 差集
let difference = new Set([...a].filter( x => !b.has(x) ));  // Set {1}


/*
如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。
    一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；
    另一种是利用Array.from方法。
 */ 
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2) );   // set 值 {2, 4, 6}

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2)); // set 值 {2, 4, 6}





