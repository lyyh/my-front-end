## 浏览器事件循环
要讲浏览器事件循环，最经典的应该讲下setTimeOut函数。  

setTimeout()方法不是ecmascript规范定义的内容，而是属于BOM提供的功能。setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。   

语法setTimeout(fn,millisec)，其中fn表示要执行的代码，可以是一个包含javascript代码的字符串，也可以是一个函数。第二个参数millisec是以毫秒表示的时间，表示fn需推迟多长时间执行。  

有一个很有意思的是
```
var start = new Date;
while(new Date - start < 1000){}
setTimeout(function(){console.log(1)},0)
```

定时器是在1000毫秒之后再执行  