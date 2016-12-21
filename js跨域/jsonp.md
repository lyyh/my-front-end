## jsonp跨域
Ajax直接请求普通文件存在跨域无权限访问的问题  
我们发现，Web页面上调用js文件时不受是否跨域的影响，凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>。  
jsonp允许用户传递一个callback参数给服务器，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

### src标签
原理：所有具有src属性的HTML标签都是可以跨域的，包括<img>, <script>  
限制：需要创建一个DOM对象，只能用于GET方法  
其实样式表的<link>标签也是可以跨域的，只要是有src或href的HTML标签都有跨域的能力。  

原理：<script>是可以跨域的，而且在跨域脚本中可以直接回调当前脚本的函数。
限制：需要创建一个DOM对象并且添加到DOM树，只能用于GET方法

```
   $.ajax({
 9             type : "get",
10             async:false,
11             url : "ajax.ashx",
12             dataType : "jsonp",
13             jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
14             jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
15             success : function(json){
16                 alert(json);
17                 alert(json[0].name);
18             },
19             error:function(){
20                 alert('fail');
21             }
22         });
23         var a="firstName Brett";
24         alert(a);
```

### jsonp jquery ajax
jQuery 1.2 中，您可以跨域加载 JSON 数据，使用时需将数据类型设置为 JSONP。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。数据类型设置为 "jsonp" 时，jQuery 将自动调用回调函数。(这个我不是很懂)



