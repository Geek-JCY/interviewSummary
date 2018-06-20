/*
    注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。
 */
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
};
myObject    // Object { [object Object]:"valueB" }

// 上面代码中，[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。