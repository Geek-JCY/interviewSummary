/*
Method 1: 通过两个for循环，每次对比相邻两个数据的大小，小的排在前面，
        如果前面的数据比后边的数据大的话 就交换两个数据的位置；
缺点：比较次数太多，效率低；
 */

var sort = function(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){ // 如果前面的数据比后面的大就交换位置
                var list = arr[i];
                arr[i] = arr[j];
                arr[j] = list;
            }
        }
    }
    return arr;
}

var sortArr = sort([10,10,1,3,8,3,5,9,6]);
console.log(sortArr);