/*
可以覆盖原生的 Symbol.iterator方法，达到修改遍历器行为的目的。
 */
var str = new String("hi");

[...str]    // ["h", "i"]
console.log( [...str] );

str[Symbol.iterator] = function(){
    return {
        next: function(){
            if(this._first){
                this._first = false;
                return {value: "bye", done: false}
            } else {
                return {done: true}
            }
        },
        _first: true
    }
}

console.log( [...str] ); // ['bye']
console.log( str ); //  'hi'

/*
上面代码中，字符串 str 的 Symbol.iterator方法被修改了，
所以扩展运算符（...）返回的值变成了 bye，而字符串本身还是 hi。
 */




