### 常用的跨域手段
jsonp,  
ajax(header('Access-Control-Allow-Orgin:http://....'))  
window.name+iframe  
window.location.hash+iframe  
html5 postMessage+iframe  
目前就知道这五个，
jsonp最常见  


自认为的cors使用场景：
cors在移动终端支持的不错，可以考虑在移动端全面尝试；PC上有不兼容和没有完美支持，所以小心踩坑。当然浏览器兼容就是个伪命题，说不准某个浏览器的某个版本就完美兼容了，说不准就有点小坑，尼玛伤不起！～
jsonp是get形式，承载的信息量有限，所以信息量较大时CORS是不二选择；
配合新的JSAPI(fileapi、xhr2等)一起使用，实现强大的新体验功能。  

#### 协议，端口，域名任一不同即跨域
跨域通信手段大概有：jsonp，document.domain，window.name，hash传值，possMessage，Access-Control-Allow-Origin  
