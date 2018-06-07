function Person(){}

Person.prototype.name = 'Jhon';
Person.prototype.age = 33;
Person.prototype.sex = '男';
Person.prototype.sayName = function(){
	console.log('name--->',this.name);
}

var person1 = new Person();

for(let item in person1){ // name age sex sayname
	console.log(item); 
}

console.log('-----------------------------------------------');
person1.job = 'software engineer';
for(let item in person1){ // job name age sex sayname
	console.log(item); 
}

/*
介绍：

1.in操作符 有两种使用方式，单独使用 和 for-in 循环中使用；

	单独使用时，in 操作符会通过访问对象来判断 属性是否存在，无论是在 实例中 还是在 原型；只要存在，就会返回 true;


2.for-in使用时，就是 in单独使用 的循环遍历, 会返回 实例 和 原型 中所有可枚举的属性；


 */
