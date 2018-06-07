setTimeout(function(){
    console.log(1);
},0);

let pm = new Promise(function(resolve, reject){
    console.log(2);
    resolve(4);
});
pm.then(function(arg){
    console.log(arg);
    console.log(5);
});

console.log(3);

// 2
// 3
// 4
// 5
// 1


