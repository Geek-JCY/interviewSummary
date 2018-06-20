/*
    基本用法 
    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
    Set 本身是一个构造函数，用来生成 Set 数据结构。
 */
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for( let i of s ){
    console.log(i);
}

/*
上面代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。
 */
