/*
    表达式还可以用于定义方法名
 */
let obj = {
    ['h'+'ello']() {
        return 'hi';
    }
};
console.log( obj.hello() );
