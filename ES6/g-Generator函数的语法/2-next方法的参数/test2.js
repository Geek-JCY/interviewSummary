/*
再看一个例子：
 */
function* foo(x){
    var y = 2 * (yield (x + 1));
    var z = yield(y/3);
    return (x + y + z);
}

var a = foo(5);
a.next(); // Object {value: 6, done: false }
a.next(); // Object {value: NaN, done: false}
a.next(); // Object {value: NaN, done: true}

var b = foo(5);
b.next();   // Object {value: 6, done: false }
b.next(12); // Object {value: 8, done: false }
b.next(13); // Object {value: 42, done: true }
// 5 + 24 + 13
/*
上面代码中，第二次运行 next方法的时候不带参数，导致 y 的值等于2 * undefined（即 NaN），除以 3 以后还是 NaN，
因此返回对象的 value属性也等于 NaN。
第三次运行 Next方法的时候不带参数，所以 z 等于 undefined，返回对象的 value属性等于 5 + NaN + undefined，即 NaN。
 
如果向 next方法提供参数，返回结果就完全不一样了。
上面代码第一次调用 b的 next方法时，返回 x+1 的值 6；
第二次调用 next方法，将上一次 yield表达式的值设为 12，因此 y等于 24，返回 y / 3的值 8；
第三次调用 next方法，将上一次 yield表达式的值设为 13，因此 z等于 13，这时 x等于 5，y等于 24，所以 return语句的值等于42。
 */

/*
注意，由于 next方法的参数表示上一个 yield表达式的返回值，所以在第一次使用 next方法时，传递参数是无效的。
V8 引擎直接忽略第一次使用 next方法时的参数，只有从第二次使用 next方法开始，参数才是有效的。
从语义上讲，第一个 next方法用来启动遍历器对象，所以不用带有参数。
 */




