/*
有了遍历器接口，数据结构就可以用 for...of循环遍历（详见下文），也可以使用 while循环遍历。
 */
var $iterator = ITERABLE[Symbol.iterator]();
var $result = $iterator.next();
whilt(!$result.done) { 
    var x = $result.value;
    // ....
    $result = $iterator.next();
}
/*
上面代码中，ITERABLE代表某种可遍历的数据结构，$iterator是它的遍历器对象。
遍历器对象每次移动指针（next方法），都检查一下返回值的 done属性，
如果遍历还没结束，就移动遍历器对象的指针到下一步（next方法），不断循环。
 */


