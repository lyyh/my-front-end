### 常用的跨域手段
jsonp,
ajax(header('Access-Control-Allow-Orgin:http://....'))
window.name+iframe
window.location.hash+iframe
html5 postMessage+ifrme
目前就知道这五个，
jsonp最常见


#### 协议，端口，域名任一不同即跨域
跨域通信手段大概有：jsonp，document.domain，window.name，hash传值，possMessage，Access-Control-Allow-Origin
