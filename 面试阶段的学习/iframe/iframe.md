## 缺点
1.*iframe会阻塞主页面的Onload事件；   
2.*搜索引擎的检索程序无法解读这种页面，不利于SEO;  
3.*iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载（iframe和主页面会并行加载）。  
4.iframe的创建比其它包括scripts和css的 DOM 元素的创建慢了 1-2 个数量级    
5.使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript  
动态给iframe添加src属性值，这样可以绕开以上两个问题。

### 共享连接池
浏览器只能开少量的连接到web服务器。比较老的浏览器，包含 Internet Explorer 6 & 7 和 Firefox 2，只能对一个域名(hostname)同时打开两个连接。这个数量的限制在新版本的浏览器中有所提高。Safari 3+ 和 Opera 9+ 可同时对一个域名打开 4 个连接，Chrome 1+, IE 8 以及 Firefox 3 可以同时打开 6 个。你可以通过这篇文章查看具体的数据表：Roundup on Parallel Connections.  

有人可能希望 iframe 会有自己独立的连接池，但不是这样的。绝大部分浏览器，主页面和其中的 iframe 是共享这些连接的。这意味着 iframe 在加载资源时可能用光了所有的可用连接，从而阻塞了主页面资源的加载。如果 iframe 中的内容比主页面的内容更重要，这当然是很好的。但通常情况下，iframe 里的内容是没有主页面的内容重要的。这时 iframe 中用光了可用的连接就是不值得的了。一种解决办法是，在主页面上重要的元素加载完毕后，再动态设置 iframe 的 SRC。  

美国前 10 大网站都使用了 iframe。大部分情况下，他们用它来加载广告。这是可以理解的，也是一种符合逻辑的解决方案，用一种简单的办法来加载广告服务。但请记住，iframe 会给你的页面性能带来冲击。只要可能，不要使用 iframe。当确实需要时，谨慎的使用他们。  

## iframe四种加载方式
### 普通加载iframe方式  
```
<iframe src="" frameborder="0" width="728" height="90" scrolling="auto"></iframe>
```
frame会在主页面的onload之前加载  
iframe会在所有iframe的内容都加载完毕之后触发iframe的onload  
主页面的onload会在iframes的onload触发之后触发，所以iframe会阻塞主页面的加载  
当iframe在加载的过程中，浏览器的会标识正在加载东西，处于忙碌状态。  
iframe会阻塞主页面的onload事件  
### 在onload之后加载iframe
```
<script> 
 function createIframe() {
         var i = document.createElement("iframe");
         i.src = "path/to/file";
         i.scrolling = "auto";
         i.frameborder = "0";
         i.width = "200px";
         i.height = "100px";
         document.getElementById("div-that-holds-the-iframe").appendChild(i);
     };

     if (window.addEventListener) window.addEventListener("load", createIframe, false);
     else if (window.attachEvent) window.attachEvent("onload", createIframe);
     else window.onload = createIframe;
 </script>
```
动态改变iframe的src  
iframe会在主页面onload之后开始加载  
主页面的onload事件触发与iframe无关，所以iframe不会阻塞加载  
当iframe加载的时候，浏览器会标识正在加载  
这种方式比普通加载方式的好处有两点：  
（1）其他页面等待主页面onload事件的代码可以尽早执行 （2）Google Toolbar计算页面加载的时间会大大减少  
这种方式比普通加载方式的不好之处有两点：  
（1）iframe还在加载的时候，浏览器还是处于忙碌状态，相对于普通加载方法，用户看到忙碌状态的时间更长 （2）用户还没等到页面完全加载完就离开了。比如广告  

### setTimeOut()加载iframe
```
<iframe id="iframe1" src="" width="200" height="100" border="2"></iframe>
 
<script>

function setIframeSrc() {
    var s = "path/to/file";
    var iframe1 = document.getElementById('iframe1');
    if ( - 1 == navigator.userAgent.indexOf("MSIE")) {
        //iframe1.src = s;
    } else {
       // iframe1.location = s;
    }
}
setTimeout(setIframeSrc, 5);
</script>
```
此种方法在除了ie8之外的在其他浏览器的表现：  
（1）iframe会在主页面onload之前开始加载  
（2）iframe的onload事件会在iframe的内容都加载完之后触发  
（3）iframe不会阻塞主页面的onlaod事件（IE8除外），为什么不会阻塞，因为是使用setTimeout（）  
（4）当iframe加载的时候，浏览器会显示忙碌状态  
              
### 异步加载iframe
```
<script>
(function(d) {
    var iframe = d.body.appendChild(d.createElement('iframe')),
    doc = iframe.contentWindow.document;
 
    // style the iframe with some CSS
    iframe.style.cssText = "position:absolute;width:200px;height:100px;left:0px;";
 
    doc.open().write('<body onload="' + 'var d = document;d.getElementsByTagName(\'head\')[0].' + 'appendChild(d.createElement(\'script\')).src' + '=\'\/path\/to\/file\'">');
 
    doc.close(); //iframe onload event happens
})(document);
</script>
```

这种方式的好处：  
（1）iframe会在主页面onload之前开始加载  
（2）iframe的onload会立即触发，因为iframe的内容一开始为空  
（3）主页面的onload不会被阻塞    
（4）为什么这个iframe不会阻塞主页面的onload，因为使用了body onload  
（5）如果不在iframe使用onlaod监听，那么iframe的加载就会阻塞主页面的onload  
（6）当iframe加载的时候，浏览器终于不显示忙碌状态了

## 友好型iframe加载
这是用来加载广告的。虽然这不是一种iframe的加载技术，但是是用iframe来盛放广告的。他的亮点不在于iframe如何加载，而是主页面、iframe、广告如何协同工作的。如下：
先创建一个iframe。设置他的src为一个相同域名下的静态html文件
在这个iframe里面，设置js变量inDapIF=true来告诉广告它已经加载在这个iframe里面了
在这个iframe里面，创建一个script元素加上广告的url作为src，然后像普通广告代码一样加载
当广告加载完成，重置iframe大小来适应广告
这种方法也没有浏览器的兼容性问题。  

## 防止页面被其他页面嵌套
```
if(window.parent!=window) window.parent.location="http://hqlong.com";//or if(window.top!=window) window.top.location="http://hqlong.com";
```

## iframe加载状态
在Firefox/Opera/Safari中，可以直接使用iframe onload事件；而在IE中，可以通过定时器测定子页面的document.readyState，或者使用iframe onreadystatechange事件计算该事件的响应。

(参考文档)[http://www.cnblogs.com/beiyuu/archive/2011/07/18/iframe-tech-performance.html]

