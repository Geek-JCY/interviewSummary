/*
    数组实例的 findIndex() 方法：
    返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
 */
// eg:
[1, 5, 10, 15].findIndex(function(value, index, arr){
    return value > 9;
});
// 2