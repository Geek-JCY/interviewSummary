/*
函数的参数传递 实质上 都是按值传递的；只不过 

基础数据类型 直接传递的是 变量值

引用数据类型 传递的是 引用地址

如下：
 */
var person = {
	name: "jack",
	age: 20
}


function setName(obj){ // 传递的是个引用地址  相当于 参数变量obj = 引用地址
	obj = {};			// obj 改变指向，指向一个对象{}
	obj.name = "Jhon"; // 修改引用的 name 属性
}

setName(person); 

console.log(person.name); // "jack"

/*
如果传递时对象的引用的话，通过调用 setName(person) 后，person.name 的值因该会变成 “Jhon”, 但是最后值却没有发生变化，

足可以证明 传参数 传递的只是引用地址值；
 */
