/*
下面是一个对数组部署 Iterator 接口的例子，尽管数组原生具有这个接口。
 */
function* makeSimpleGenerator(array) {
    var nextIndex = 0;

    while(nextIndex < array.length){
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator(['yo', 'ya']);
gen.next().value; // 'yo'
gen.next().value; // 'ya'
gen.next().value; // true


