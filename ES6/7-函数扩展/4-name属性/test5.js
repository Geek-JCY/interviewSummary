/*
    bind返回的函数，name属性值会加上bound前缀。
 */
function foo() {};
foo.bind({}).name;  // "bound foo"

// 匿名函数
(function(){}).bind({}).name // "bound "