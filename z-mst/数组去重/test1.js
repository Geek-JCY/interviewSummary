// 数组去重

var arr1 = [11,21,2,11,15,16,15,12,21,11];

// Method 1: 利用 indexOf() 方法， 判断新数组中是否包含了，循环中的 个体item
var arr2 = [];
arr1.forEach((item, index, thisArray) => {
	arr2.indexOf(item)==-1 ? arr2.push(item) : '';
})
console.log('arr2====>', arr2)

// Method 2: 同样利用 indexOf() 方法, 判断原数组indexOf()值，是否为 索引值index
var arr3 = [];
arr1.forEach((item, index, thisArray) => {
	arr1.indexOf(item)==index ? arr3.push(item) : '';
})
console.log('arr3====>', arr4)

// Method 3: 利用 对象键值唯一性
var arr4 = [];
var obj = {};
arr1.forEach((item, index, thisArray) => {
	!obj[item] ? (obj[item]=1, arr4.push(item)) : '';
});
console.log('arr4====>', arr3)

// Method 4: 先排序，再去重法; 优点：效率高；缺点：改变了原数组；
var arr1 = arr1.sort();
var end = arr1[0];
var arr5 = []; 
arr5.push(end);
arr1.forEach((item, index, thisArray) => {
	item!=end ? (arr5.push(item), end=item ): '';
});
console.log('arr5====>', arr5);

