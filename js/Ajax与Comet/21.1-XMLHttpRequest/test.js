/*
所有浏览器中 用相同的方式 创建 xhr对象；
 */
// IE7+ 的方式
var xhr = new XMLHttpRequest();

// 兼容所有浏览器的方式
function createXHR(){
    if( typeof XMLHttpRequest != "undefined" ){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if(typeof arguments.callee.activeXString != "string" ){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                i, len;
            for(i=0,len=versions.length; i<len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;                    
                } catch (ex){
                    // skip
                }

            }    
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}



