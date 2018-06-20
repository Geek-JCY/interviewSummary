/*
为了防止出现这个问题，通常要在proxy.preventExtensions方法里面，调用一次Object.preventExtensions。
 */
var p = new Proxy({}, {
    preventExtensions: function(target){
        console.log('called');
        Object.preventExtensions(target);
        return true;
    }
});

Object.preventExtensions(p);
// 'called'
// true