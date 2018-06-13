/*
考点： 递归
问题： 求 n的阶乘
 */
function a(arg){
	if( arg === 1 ){
		return 1;
	}

	return arg * a(arg-1);
}

console.log(a(3));
