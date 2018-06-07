javascript 的数据类型：
    String、Number、Boolean、Undefined、Null、Object

    基本数据类型: String、Number、Boolean、Undefined、Null

    引用数据类型：Object


栈：
    先进后出；

    存放的是 基本数据类型
    
    栈上的空间 是 系统自动分配、自动回收的，所以，栈上的数据的生存周期只在只在函数运行的过程中，
    运行后就释放掉，不可再访问；


堆：
    先进先出；

    存放的是 引用数据类型

    堆上的空间 是 根据需要向系统申请的，只要 不主动释放，就一直可以访问到，缺点这样的空间占用过多会造成内存泄漏；
    主动释放 方法：变量=null