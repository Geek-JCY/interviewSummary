/*
一.可维护性：
    1.可理解性    ----> 注释
    2.直观性      ----> 命名直观
    3.可适应行    ----> 方法的可复用性考虑
    4.可扩展性    ----> 考虑到未来可能对核心功能进行扩展
    5.可调试性    ----> 当有地方出错的时候，代码可以给出足够的信息 尽可能直接确定问题所在
 
二.代码约定
    1.可读性             ----> 代码添加注释说明
    2.变量和函数命名     ----> 语义化 [ 变量：名词  函数：动词  不用担心名字过长（这个问题可以在压缩时解决）]
    3.变量类型透明       ----> 初始化 确定变量类型

三.松散偶尔
    1.解耦 HTML/JavaScript
    2.解耦 CSS/JavaScript   ----> 尽量做到 CSS只控制显示，JavaScript 只负责行为
                                [如果非要用 js改变显示的话，可以用 动态改变样式类 的方法]
    3.解耦 应用逻辑/事件处理程序  ----> 1.更容易触发特定过程的事件，处理事件处理的方法 也达到了 可公用的目的
                                  ----> 2.可以在不附加到事件的情况下，测试代码，使其更易创建单元测试和自动化应用流程 

四.编程实践
    1.尊重对象所有权         ----> 最佳实践，永远不修改不是由你所有的对象，也就是由你所创建的对象；
    2.避免全局变量           ----> 尽量避免全局变量的个数，单一的全局亮的延伸就是 命名空间 的概念；
                                    Method 1:
                                    eg:
                                        var name = 'jack';
                                        function sayName (){
                                            console.log(name);
                                        }
                                        // 这种方式 创建了两个全局变量，不但覆盖了window.name属性，
                                        而且功能也有可能会造成冲突；

                                    Method 2:
                                    eg:
                                        var myApplication = {
                                            name: 'jack',
                                            sayName: function(){
                                                console.log(this.name);
                                            }
                                        }
                                        // 这种方式 创建了一个全局变量, 如果程序出现了任何问题
                                        都可以在 myApplication 对象中进行查找；
    
    3.避免与 null进行比较     ----> 一般来讲在应用逻辑中，与null 进行比较没有什么实际的意义，可做具体判断
                                    eg:
                                        基本数据类型：typeof 
                                        引用数据类型：instanceof
    4.使用常量                ----> 将数据单独抽取出来，作为单独定义的常量的方式，可抽离的数据有以下几种：
                                    - 重复值
                                    - 用户界面字符串：都应抽离出来以方便国际化
                                    - URLS : Web应用中，资源位置很容易变更，所以推荐用一个公共的地方存放所有的URL
                                    - 任意可能会更改的值
                                    企业级 JavaScript开发，常量的使用非常重要，它可以让代码易于维护，
                                    也在数据更改时保护代码；
                                    eg:
                                        var Constances = {
                                            INVALID_VALUE_MSG: 'Invalid value!',
                                            INVALID_VALUE_URL: '/error/invalid.php'
                                        }
                                        function validate(values){
                                            if(!value){
                                                alert(Constances.INVALID_VALUE_MSG);
                                                location.href = Constances.INVALID_VALUE_URL;
                                            }
                                        }


 */