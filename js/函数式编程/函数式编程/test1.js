/*
一个基本的函数式编程的例子
 */ 
// 数组中每个单词，首字母大写  
const arr = ['apple', 'pen', 'apple-pen']; 

// 一般写法
for(const i in arr){
	const c = arr[i][0];
	arr[i] = c.toUpperCase() + arr[i].slice(1);
}
console.log(arr);


// 函数式写法一
function upperFirstWord(word){
	return word[0].toUpperCase() + word.slice(1);
}

function wordToUpperCase(arr){
	return arr.map(upperFirstWord);
}

console.log(wordToUpperCase(arr))


// 函数式写法二
console.log(arr.map( word => word[0].toUpperCase() + word.slice(1) ));
