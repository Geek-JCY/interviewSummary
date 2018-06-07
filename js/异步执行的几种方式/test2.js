

setImmediate(function(){
    console.log('setImmediate 1');
})

setTimeout(function(){
    console.log('setTimeout 1');
},0)

process.nextTick(function(){
    console.log('process.nextTick 1');
});

new Promise(function(resolve){
    console.log('promise 1');
    resolve(666)
})
.then(function(arg){
    console.log(arg);
})

console.log('test 1');