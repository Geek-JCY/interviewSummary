// 按数组中 对象的某一项进行排序
// 应用了快排思想
// 如下： 按 a 倒序
var arr = [{a:5, b:2}, {a:2, b:4}, {a:6, b:1}, {a:1, b:3}];
for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
        if( arr[j] ){
            if(arr[i].a < arr[j].a){
                var o = arr[i];
               arr[i] = arr[j];
               arr[j] = o;
            }
        }
    }
}
console.log(arr);


