/*
Method2: 取基准点 拼接数组法
 */
var quickSort = function(arr){
    if(arr.length <= 1){    // 如果数组长度小于等于1无需判断直接返回即可 
        return arr;
    }
    var pivotIndex = Math.floor(arr.length/2); // 取基准点
    var pivot = arr.splice(pivot, 1)[0]; // 取基准点的值，splice(index, 1)函数返回数组中被删除的那个数
    var left = []; // 存放比基准点小的数组
    var right = []; // 存放比基准点大的数组
    for(var i=0; i<arr.length; i++){ // 遍历数组，进行判断分配
        if(arr[i] < pivot){
            left.push(arr[i]); // 比基准点小的放在左边的数组
        }
        else {
            right.push(arr[i]); // 比基准点大的放在右边的数组
        }
    }
    // 递归执行以上操作，对左右两个数组进行上面的操作，直到数组长度<=1
    return quickSort(left).concat([pivot], quickSort(right));
}

var sortArr = quickSort([10,10,1,3,8,3,5,9,6]);
console.log(sortArr);

