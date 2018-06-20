/*
    注意，属性名表达式  与  简洁表示法，不能同时使用，会报错。
 */
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};