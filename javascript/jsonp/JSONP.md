## 最近学习了一下jsonp，在此总结下
很简单，就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。当需要通讯时，本站脚本创建一个<script>元素，地址指向第三方的API网址，形如： 
<script src="http://www.example.net/api?param1=1&param2=2"></script> 
并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。 
第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如： 
callback({"name":"hax","gender":"Male"}) 
这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。 
补充：“历史遗迹”的意思就是，如果在今天重新设计的话，也许就不会允许这样简单的跨域了嘿，比如可能像XHR一样按照CORS规范要求服务器发送特定的http头。

JSONP是一种非正式传输协议，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了

jsonP本身就是一个get请求，而script节点本身也是一个get请求，这个思想是通过后端的配合（后端输出的 response text必须符合js语法）更好的利用了get请求而已。 

json 是一种数据格式
jsonp 是一种数据调用的方式。


JSONP的缺点则是：它只支持GET请求而不支持POST等其它类型的HTTP请求；json是一种数据格式，jsonp是非正式传输协议。jsonp里传输的就是json的数据格式，只是在发送请求时多加一个参数，其值为回调函数。后台程序在获得该回调函数后，把准备好的json数据拼接到回调函数里面。例子：
echo callback + '(' + json + ')';

作者：Zhuxy
链接：https://www.zhihu.com/question/19966531/answer/22801250
来源：知乎
著作权归作者所有，转载请联系作者获得授权。

可以参考：
[http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html]