## 主要为两类方法
出于安全考虑，HTML的同源策略不允许JavaScript进行跨域操作，  
一类是Hack，比如通过title, navigation等对象传递信息，JSONP可以说是一个最优秀的Hack。  
另一类是HTML5支持，一个是Access-Control-Allow-Origin响应头，一个是window.postMessage。      
## 访问控制安全的讨论
在HTML5之前，JSONP已经成为跨域的事实标准了，jQuery都给出了支持。 值得注意的是它只是Hack，并没有产生额外的安全问题。 因为JSONP要成功获取数据，需要跨域资源所在服务器的配合，比如资源所在服务器需要自愿地回调一个合适的函数，所以服务器仍然有能力控制资源的跨域访问。  
跨域的正道还是要使用HTML5提供的CORS头字段以及window.postMessage， 可以支持POST, PUT等HTTP方法，从机制上解决跨域问题。 值得注意的是Access-Control-Allow-Origin头字段是资源所在服务器设置的， 访问控制的责任仍然是在提供资源的服务器一方，这和JSONP是一样的。