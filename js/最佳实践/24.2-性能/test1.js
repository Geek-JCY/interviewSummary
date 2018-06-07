/*
一.注意作用域
    1.避免全局查找  ----> 将在一个函数中会用到的全局对象存储为局部变量
                            eg:
                                function updateUI(){
                                    var imgs = document.getElementsByName('img');
                                    for(var i=0; i<imgs.length; i++){
                                        imgs[i].title = document.title + ' imaage ' + i;
                                    }
                                    var msg = document.getElementById("msg");
                                    msg.innerHTML = "Update complete.";
                                }
                                // 上例 查找三次 全局对象 document
                                function updateUI(){
                                    var doc = document;
                                    var imgs = doc.getElementsByName('img');
                                    for(var i=0; i<imgs.length; i++){
                                        imgs[i].title = doc.title + ' imaage ' + i;
                                    }
                                    var msg = doc.getElementById("msg");
                                    msg.innerHTML = "Update complete.";
                                }
                                // 改成 如这样的方式，只查找了一次document, 后边都是引用的局部变量；
                                // 这样 可以减轻程序在作用域链上查找全局变量的次数，加快速度

    2.避免 with语句 ----> with语句会创建自己的作用域，因此会增加执行代码的作用域链的长度；
                            eg:
                                function updateBody(){
                                    with(document.body){
                                        alert(tagName);
                                        innerHTML = "Hello world!";
                                    }
                                }
                                // 必须使用with语句的情况很少，因为它的主要作用是消除额外的字符
                                // 但是创建了自己的作用域，增加了作用域链的长度
                                function updateBody(){
                                    var body = document.body;
                                    alert(body.tagName);
                                    body.innerHTML = "Hello world!";
                                }
                                // 将 document.body 存储为局部变量，省略了额外的对全局变量的查找


二.选择正确的方法
    1.避免不必要的属性查询  ----> 计算机科学中，算法的复杂度是使用 O符号表示的；
                                    O(1)        常值  不管执行多少值时间都是恒定的，一般表示简单值和存储变量中的值
                                    O(log n)    对数  
                                    O(n)        线性
                                    O(n2)       平方
                                而对数组中的值、和常值 进行查找的时候 复杂度一般是 O(1);
                                而对对象属性值 的查找 复杂度是 O(n);
                                所以要尽量避免 属性查找的次数；
                                如：
                                var query = window.location.href.substring(window.locating.href.indexOf("?"))
                                //这种写法 用了 6个 O(n) 级别的查找
                                var url = window.location.href;
                                var query = url.substring(url.indexOf("?"))
                                // 这种写法用了 4个O(n) 和 2个 O(1) 级别的查找，相对于原版本 要 节省 33% 

    2.优化循环              ----> 
                                (1).减值迭代
                                (2).简化终止条件
                                (3).简化循环体
                                (4).使用后测试循环 ： for 和 while 都是前测循环， do-while 是后测循环

    3.展开循环              ----> 一般大数据集的出来 这样来做 会好些，如果不是大数据集的，这样的开销并不值得
                                具体的思想就是 Duff装置的技术 和 基于Duff装置的技术的优化，
                                再具体一点 就是将数据集分批次执行，减少否循环的次数；
    
    4.避免双重解释          ----> 当javascript代码想解析 javascript 的时候就会存在双冲解释惩罚；
                                如：
                                    eval("alert('Hello world!')");                      ---- 某些代码求值
                                    var sayHi = new Function("alert('Hello world!')");  ---- 创建新函数
                                    setTimeout("alert('Hello world!')", 500);           ---- 设置超时

                                    alert() 本来就是可执行的函数，上面的三种方式 出现了 双重解释的问题，
                                    先把 字符串解释成 可执行程序，再执行

                                    正确的方式：
                                    alert('Hello world!')
                                    var sayHi = function(){
                                        alert('Hello world!')
                                    }
                                    setTimeout(function(){
                                        alert('Hello world!')
                                    }, 500)

    5.性能的其它注意项      ----> 
                                (1).原生方法较快
                                (2).switch语句较快
                                (3).位运算较快

三.最小化语句数
    1.多个变量声明          ----> 多条声明语句融合成一条， 如下：
                                    var a = 1, b = 2, c = 3, d = 4; // 原来要用四条 var语句 现在用一条；

    2.插入迭代之            ----> 但使用迭代值时 尽可能合并语句， 如下：
                                    var name = values[i];
                                    i++;
                                    可合并为：
                                    var name = values[i++];

    3.使用数组和对象字面量  ----> 定义数组和对象时的两种方法：构造函数 和 字面量；
                                  构造函数的方式要用多条语句来完成定义，而字面量的方式一般在一条语句中就可完成；
                                  如下：
                                  // 定义数组
                                  // 构造函数 方式：
                                  var values = new Array();
                                  values[0] = 0;
                                  values[1] = 1;
                                  values[2] = 2;
                                  // 字面量 方式
                                  var values = [0, 1, 2]; 

                                  // 定义对象
                                  // 构造函数 方式
                                  var person = new Object();
                                  person.name = 'Jack'
                                  person.age = 22
                                  person.sayHi = function(){
                                    console.log('Hi!');
                                  }
                                  // 字面量 方式
                                  var person = {
                                    name: 'jack',
                                    age: 22,
                                    sayHi: function(){
                                        console.log('Hi!');
                                    }
                                  }

 四.优化 DOM 交互
    1.最小化现场更新        ----> documentFragment 的使用
                                    创建dom 或 更新dom 的时候，避免对真实dom的操作，会引起页面的重绘和reflow(回流)，
                                    应用 documentFragment先创建 dom碎片再一次性更新dom，减少重绘和 reflow的次数； 

    2.使用 innerHTML        ----> 对于小的DOM操作处理的话，用DOM方法 和 用innerHTML 来处理DOM更改效率是差不多的；
                                  但涉及到大的DOM改动的时候，innerHTML的速度要快很多；
                                  
                                  原因：当用innerHTML时，会在后台创建一个HTML解析器，然后使用内部的DOM调用来创建
                                    DOM结构，而非基于JavaScript的DOM调用；由于内部方法是编译好而非解释执行的；
                                    所以要快很多；

                                  如下：
                                    var list = document.getElementById('myList'),
                                        html = "",
                                        i;
                                    for(i=0; i<10; i++){
                                        html += "<li>Item "+i+"</li>";
                                    }
                                    list.innerHTML = html; 
                                  注意：控制调用innerHTML 的次数，因为调用一次 innerHTML 就做了一次现场更新，
                                    所以要 如上拼好字符串，最后调用一次 innerHTML 是比较好的实践方式；

    3.使用事件代理          ----> 页面上事件处理的程序的数量和页面响应用户交互的速度之间有个负相关；
                                  为了减轻这种惩罚，最好使用事件代理；

                                  如：事件委托的 冒泡 和 捕获

    4.注意HTMLCollection    ----> 任何时候要访问HTMLCollection, 不管它是一个属性还是一个方法，都是要在文档上进行一次查询，
                                  这个查询开销很昂贵。最小化访问HTMLCollection的次数可以极大的改善脚本的性能：
                                  
                                  如下：
                                  var images = document.getElementsByTagName('img'),
                                  i,len,
                                  image;
                                  for(i=0, len=images.length; i<len; i++){ // 减少饿了访问 image.length 的次数 
                                    // 处理
                                    image = images[i]; 
                                    // 上句，将image[i] 存入 image,之后要多 images[i]做处理的时候，
                                    //直接访问image,而不用访问images[i]了，减少了查询HTMLCollection的次数
                                  }
                                  这样的写法 就减少了访问HTMLCollection 的次数


*/


