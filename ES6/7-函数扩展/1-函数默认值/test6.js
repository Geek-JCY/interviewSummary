/*
    函数的 length 属性

    指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
    也就是说，指定了默认值后，length属性将失真。

    这是因为length属性的含义是，该函数 预期传入的参数 个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了
 */
console.log( (function(a){}).length );  // 1

(function(a){}).length  // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2

/*
    如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
 */
(function(a=0, b, c){}).length  // 0
(function(a, b=0, c){}).length // 1