/*
考点：递归
问题：深拷贝 对象
 */
var objA = {
	age: 22,
	name: {
		cn:{
			firstname: '纪',
			secondname: '成业'
		},
		en: 'jcy'
	},
	friends:['张三','李四','王五']
};


function deepClone(o, c){
	c = c || {};
	for(var i in o){
		if(typeof o[i] === 'object'){
			if(o[i] instanceof Object && (o[i] instanceof Array) === false ){
				c[i] = {};
			}
			if(o[i] instanceof Array ){
				c[i] = [];
			}
			deepClone(o[i], c[i]);
		}
		else {
			c[i] = o[i];
		}
	}
	return c;
}

var objB = deepClone(objA, {});
console.log(objB);


objB.name.en = 'jack';
console.log(objB);
console.log(objA);



