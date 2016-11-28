## get post请求
HTTP请求中，如果是get请求，那么表单参数以name=value&name1=value1的形式附到url的后面，如果是post请求，那么表单参数是在请求体中，也是以name=value&name1=value1的形式在请求体中。

### get方式
```
Query String Parameters  
name:mikan  
address:street
```
### post方式
```
Form Data  
name:mikan  
address:street  
```  
这里要注意post请求的Content-Type为application/x-www-form-urlencoded，参数是在请求体中，即上面请求中的Form Data。

### 原生的post请求
```
Request Payload  
name=mikan&address=street  
```

注意请求的Content-Type为text/plain;charset=UTF-8，而请求表单参数在RequestPayload中。

参考链接：
http://blog.csdn.net/mhmyqn/article/details/25561535

### jquery 与原生ajax
jquery在执行post请求时，会设置Content-Type为application/x-www-form-urlencoded，所以服务器能够正确解析，而使用原生ajax请求时，如果不显示的设置Content-Type，那么默认是text/plain，这时服务器就不知道怎么解析数据了，所以才只能通过获取原始数据流的方式来进行解析请求数据。

