/*
同一个拦截器函数，可以设置拦截多个操作。
 */
var handler = {
    get: function(target, name){
        if(name === 'prototype'){
            return Object.prototype;
        }
        return 'Hello, '+name
    },
    apply: function(target, thisBinding, args){
        return args[0]
    },
    construct: function(target, args){
        return {value: args[1]}
    }
};

var fproxy = new Proxy(function(x, y){
    return x + y
}, handler);

fproxy(1,2) // 1
console.log( fproxy(1,2) ); 

new fproxy(1,2) // {value: 2}
console.log(new fproxy(1,2)); 

fproxy.prototype == Object.prototype // true
console.log( fproxy.prototype == Object.prototype );

fproxy.foo = "Hello, foo" // true
console.log( fproxy.foo = "Hello, foo" );

// 对于可以设置、但没有设置拦截的操作，则直接落在目标对象上，按照原先的方式产生结果。
 