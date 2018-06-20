/*
yeild 错误应用 二：

下面是另外一个 错误应用 yield的 例子。
 */
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a){
    a.forEach(function(item){
        if(typeof item != 'number'){
            yield* flat(item);
        } else {
            yield item;
        }
    });
};

for(var f of flat(arr)){
    console.log(f);
}
// SyntaxError: Unexpected identifier
/*
上面代码也会产生句法错误，因为 forEach方法的参数是一个普通函数，
但是在里面使用了 yield表达式（这个函数里面还使用了yield*表达式，详细介绍见后文）。
一种修改方法是改用 for循环。
 */
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}
// 1 2 3 4 5 6 

