/*
Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
 */
// 例一：
const set = new Set([1, 2, 3, 4, 4]);
console.log( [...set] );    // [1, 2, 3, 4]

// 例二：
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log( items.size );  // 5

// 例三：
function divs() {
    return [...document.querySelectorAll('div')];
}
const set = new Set(divs());
console.log(set.size);
// 类似于
divs().forEach(div => set.add(div));
set.size // 56

/*
上面代码中，例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。
 */