1. <b>跨域</b>
先谈谈什么叫跨域，只要协议，域名，端口不同都会被当作不同的域
特别注意两点：
第一，如果是协议和端口造成的跨域问题“前台”是无能为力的，
第二：在跨域问题上，域仅仅是通过“URL的首部”来识别而不会去尝试判断相同的ip地址对应着两个域或两个域是否在同一个ip上。
1). document.domain（主域相同的情况下）
2). 动态创建script (script不受同源政策限制)
3). location.hash + iframe
原理是利用location.hash来进行传值。
假设域名a.com下的文件cs1.html要和cnblogs.com域名下的cs2.html传递信息。
 cs1.html首先创建自动创建一个隐藏的iframe，iframe的src指向cnblogs.com域名下的cs2.html页面
 cs2.html响应请求后再将通过修改cs1.html的hash值来传递数据
同时在cs1.html上加一个定时器，隔一段时间来判断location.hash的值有没有变化，一旦有变化则获取获取hash值
注：由于两个页面不在同一个域下IE、Chrome不允许修改parent.location.hash的值，所以要借助于a.com域名下的一个代理iframe

修改hash值不会导致页面刷新

4). window.name + iframe	
window.name 值在不同的页面（甚至不同域名）加载后依旧存在，name的最长值支持2m
必要条件:
iframe标签的跨域能力
window.name属性值在文档刷新后依旧存在的能力

在载入iframe的过程中迅速重置它得src属性，使它同域，然后再改变它的src，实现跨域。
```

<body>
  <script type="text/javascript"> 
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    var state = 0;
 
    iframe.onload = function() {
      if(state === 1) {
          var data = JSON.parse(iframe.contentWindow.name);
          console.log(data);
          iframe.contentWindow.document.write('');
          iframe.contentWindow.close();
        document.body.removeChild(iframe);
      } else if(state === 0) {
          state = 1;
          iframe.contentWindow.location = 'http://localhost:81/cross-domain/proxy.html';
      }
    };
 
    iframe.src = 'http://localhost:8080/data.php';
    document.body.appendChild(iframe);
  </script>
</body>

```

5). postMessage
html5中新增的api，postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。
```

window.frames[0].postMessage('getcolor','http://lslib.com');

```

postMessage(data,origin)方法接受两个参数

 1.data:要传递的数据，html5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用JSON.stringify()方法对对象参数序列化，在低版本IE中引用json2.js可以实现类似效果。

2.origin：字符串参数，指明目标窗口的源，协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，这个参数是为了安全考虑，postMessage()方法只会将message传递给指定窗口，当然如果愿意也可以建参数设置为"*"，这样可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

6).  CORS
就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败
```
function createCORS(method, url){
    var xhr = new XMLHttpRequest();
    if('withCredentials' in xhr){
        xhr.open(method, url, true);
    }else if(typeof XDomainRequest != 'undefined'){
        var xhr = new XDomainRequest();
        xhr.open(method, url);
    }else{
        xhr = null;
    }
    return xhr;
}
var request = createCORS('get', 'http://www.baidu.com');
if(request){
    request.onload = function(){
        ......
    };
    request.send();
}

```

7). jsonp
JSONP包含两部分：回调函数和数据。
回调函数是当响应到来时要放在当前页面被调用的函数。
数据就是传入回调函数中的json数据，也就是回调函数的参数了。

 jsonp虽然很简单，但是有如下缺点：
1）安全问题(请求代码中可能存在安全隐患)
2）要确定jsonp请求是否失败并不容易

原理如下：
//当我们通过script标签请求时
//后台就会根据相应的参数(json,handleResponse)
//来生成相应的json数据(handleResponse({"data": "zhe"}))
//最后这个返回的json数据(代码)就会被放在当前js文件中被执行
//至此跨域通信完成

```
function handleResponse(response){
    console.log('The responsed data is: '+response.data);
}
var script = document.createElement('script');
script.src = 'http://www.baidu.com/json/?callback=handleResponse';
document.body.insertBefore(script, document.body.firstChild);
/*handleResonse({"data": "zhe"})*/

```

8). web sockets
web sockets原理：在JS创建了web socket之后，会有一个HTTP请求发送到浏览器以发起连接。取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为web sockt协议。

```
var socket = new WebSockt('ws://www.baidu.com');//http->ws; https->wss
socket.send('hello WebSockt');
socket.onmessage = function(event){
    var data = event.data;
}

```

2. <b>HTTPS与HTTP的区别</b>
**https简介** 
https实际上由两部份组成:http+ssl/tlcs,简单的来说就是在http的基础上又加上了一层处理加密的模块，服务端和客户端的模块都会通过ssl/tls加密，所以传输的数据都是加密后的数据。

>SSL协议，是一种安全传输协议，最初是由 Netscape 在1996年发布，由于一些安全的原因SSL v1.0和SSL v2.0都没有公开，直到1996年的SSL v3.0。TLS是SSL v3.0的升级版，目前市面上所有的Https都是用的是TLS，而不是SSL。

**https验证流程**
1. 客户端发送https请求，这个请求除了http的基本信息还包括服务器需要的客户端的加密算法设置，会话数据等
2. 服务端接收到客户端的请求后，与自身支持的信息进行对比，不支持则断开连接，反之会向客户端返回服务器的认证证书
3. 客户端收到服务器的认证证书后会分情况做出以下判断
  3.1 证书合法性
    证书是否合法（合法的证书由认证的机构颁发）
    证书包含的地址和正访问的地址是否一样
  3.2 生成随机密钥
    证书验证通过（合法机构颁发或者用户接受了不授信的证书），浏览器会生成随机数，然后用证书中的密钥加密
  3.3 握手信息
    一般约定通过hash签名方式，然后随机数加密"握手消息+握手消息hash值 "一起发给服务端
4. 服务器接收了客户端返回的消息，然后用自身的私钥来解密随机数密码，再用随机数解密握手消息和hash签名值，并对比传送过来的hash值，对比不一致，则连接中断，反之，用随机密码加密握手消息返回给客户端
5. 客户端接受了服务器传回的消息，然后用随机数解密握手消息的hash值，如果与服务器返回的hash值一样，此时握手结束。此后的数据信息全部用3.2步骤中生成的随机数加密与解密

**https与http的区别**
1. https协议需要证书支持
2. http是超文本传输协议，信息是明文传输，https是具有安全性的的ssl加密传输协议
3. http和https使用的是不同的连接方式，用的端口也不一样，前者是80，后者是443
4. http的链接很简单，是无状态的；https协议是由ssl+http协议构建的可进行加密传输，身份认证的网络认证，比http安全
5. https比http多用服务器资源，这一部分资源很少，主要取决于ssl和tls的消耗

**https的优缺点**
 
 1. seo方面
     优点：
        https在同等http网站中，搜索结果排名更高
     缺点:
        使用https协议会使页面的加载时间延长50%，增长耗电量，此外https会影响缓存，增加数据开销和功耗，部分安全措施会受到影响
 
 2. 安全性

   优点：
     1. 使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
     2. HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
     3. HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本
  
  缺点：
    https并非绝对的安全，掌握根证书的机构，掌握加密算法的组织同样可以进行中间人形式的攻击的成本

3. 经济方面
  优点
    经济方面我想了好久好像没啥优点
  缺点
    1. SSL证书需要钱，功能越强大的证书费用越高
    2. SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名
    3. HTTPS连接缓存不如HTTP高效，，流量成本高
    4. HTTPS连接服务器端资源占用高很多
    5. HTTPS协议握手阶段耗时比较多 

**https 2.0的新特性**
    1.HTTP/2采用二进制格式而非文本格式

      比起像HTTP/1.x这样的文本协议，二进制协议解析起来更高效、“线上”更紧凑，更重要的是错误更少。

    2.HTTP/2是完全多路复用的，而非有序并阻塞的——只需一个连接即可实现并行

    HTTP/1.x 有个问题叫线端阻塞(head-of-line blocking), 它是指一个连接(connection)一次只提交一个请求的效率比较高, 多了就会变慢。 HTTP/1.1 试过用流水线(pipelining)来解决这个问题, 但是效果并不理想(数据量较大或者速度较慢的响应, 会阻碍排在他后面的请求). 此外, 由于网络媒介(intermediary )和服务器不能很好的支持流水线, 导致部署起来困难重重。而多路传输(Multiplexing)能很好的解决这些问题, 因为它能同时处理多个消息的请求和响应; 甚至可以在传输过程中将一个消息跟另外一个掺杂在一起。所以客户端只需要一个连接就能加载一个页面。

    3.使用报头压缩，HTTP/2降低了开销

    假定一个页面有80个资源需要加载（这个数量对于今天的Web而言还是挺保守的）, 而每一次请求都有1400字节的消息头（着同样也并不少见，因为Cookie和引用等东西的存在）, 至少要7到8个来回去“在线”获得这些消息头。这还不包括响应时间——那只是从客户端那里获取到它们所花的时间而已。这全都由于TCP的慢启动机制，它会基于对已知有多少个包，来确定还要来回去获取哪些包 – 这很明显的限制了最初的几个来回可以发送的数据包的数量。相比之下，即使是头部轻微的压缩也可以是让那些请求只需一个来回就能搞定——有时候甚至一个包就可以了。这种开销是可以被节省下来的，特别是当你考虑移动客户端应用的时候，即使是良好条件下，一般也会看到几百毫秒的来回延迟。

    4.HTTP/2让服务器可以将响应主动“推送”到客户端缓存中

    当浏览器请求一个网页时，服务器将会发回HTML，在服务器开始发送JavaScript、图片和CSS前，服务器需要等待浏览器解析HTML和发送所有内嵌资源的请求。服务器推送服务通过“推送”那些它认为客户端将会需要的内容到客户端的缓存中，以此来避免往返的延迟。


**部分免费证书推荐**
  CloudFlare SSL，StartSSL，NameCheap等等

  3.输入URL到页面显示发生了什么
    1) 浏览器开启新线程处理这个请求，然后对url进行判断（协议，hash等）
    2）