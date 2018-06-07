var a  = {n:1};
var b = a;
a.x = a = {n:2};

// 相当于
var a  = {n:1}; // 此时，a ==> {n:1}

var b = a; 		// 此时，a ==> {n:1}  b ==> {n:1} 

a.x = 值;		// 此时，“值”为 后边 (a={n:2})这个语句执行之后，a的值
				// 重点，a的值是什么呢？ 实际上是 {n:2} 这个对象的 “引用地址”
				// 所以, a.x ==> {n:2}
				// 而，a 和 b 共享一个对象，所以此时 b.x ==> {n:2} 

a = {n:2};		// a改变了指向，此时，a ==> {n:2}, b ==> {n:1, x:{n:2}}

console.log(a.x); // undefined
console.log(b.x); // {n:2}

console.log(a); // {n:2}
console.log(b); // {n:1, x:{n:2}}