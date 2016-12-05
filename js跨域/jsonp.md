## jsonp跨域
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

