## 跨域资源共享（CORS）
Cross-Origin Resource Sharing (CORS) 是W3c工作草案，它定义了在跨域访问资源时浏览器和服务器之间如何通信。CORS背后的基本思想是使用自定义的HTTP头部允许浏览器和服务器相互了解对方，从而决定请求或响应成功与否，是一套AJAX跨域问题的解决方案。

### 兼容性
ie8+,ie8、ie9部分兼容，ie10及以上友好兼容  
#### CORS与JSONP相比，更为先进、方便和可靠。  
1、 JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。  
2、使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据
3、 JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS。
对一个简单的请求，没有自定义头部，要么使用GET，要么使用POST，它的主体是text/plain,请求用一个名叫Orgin的额外的头部发送。Origin头部包含请求页面的头部（协议，域名，端口），这样服务器可以很容易的决定它是否应该提供响应。
服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。
Header set Access-Control-Allow-Origin * 
为了防止XSS攻击我们的服务器， 我们可以限制域，比如，比起JSONP有更好的错误处理。  
Access-Control-Allow-Origin: http://blog.csdn.net
很多服务都已经提供了CORS支持，比如 AWS 支持跨域资源分享功能CORS，向S3上传不需要代理。    
4.JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。  