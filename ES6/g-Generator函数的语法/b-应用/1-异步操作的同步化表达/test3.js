/*
下面是另一个例子，通过 Generator 函数逐行读取文本文件。
 */
function* numbers(){
    let file = new FileReader('next.txt');
    try {
        while(!file.eof){
            yield parseInt(file.readLine(), 10);
        }
    } finally {
        file.close();
    }
}
/*
上面代码打开文本文件，使用 yield表达式可以手动逐行读取文件。
 */

