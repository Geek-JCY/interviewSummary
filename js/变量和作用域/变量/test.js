/*
编译时，应该是 先扫描变量声明，再扫描函数声明，
如 下面的测试代码：
*/

1：console.log(typeof name);	// function

2：var name = 1;

3：function name(){
	console.log(111);
}

4：console.log(typeof name);	// number

5：name() // TypeError: name is not a function

/*
通过测试结果可以推断出，
    编译时，应该是 var name 先做声明,并不赋值（也就是 undefined），放入栈中，然后，function name() 在做声明，只不过函数声明有些特殊，它是在编译是就赋值的，所以，找到栈中找到已存在的name 标识符，给它添加了 function name() 的函数式的值，然后编译阶段结束；
    进入执行阶段(run time):
    执行第1句时，还没有给 name标识的栈区赋值，所以，还是保留编译时的值 function name(),
    执行第2句时，给name标识的栈区重新赋值为 1，也就是覆盖了 function name() 这个函数式的值；
    执行第4句时，得到 typeof name 为 number，也就说的通了；
    执行第5句时，执行name() 函数的时候 报TypeError 也是说的通的啦；

*/
