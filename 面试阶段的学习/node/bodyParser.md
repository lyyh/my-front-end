## bodyParser中间件
bodyParser中间件用来解析http请求体。  
bodyParser.json是用来解析json数据格式的。bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据，也就是请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded  

常见四种Content-Type类型
application/x-www-form-urlencoded 常见的form提交  
multipart/form-data 文件提交  
application/json 提交json格式的数据  
text/xml 提交xml格式的数据  

### querystring
querystring就是nodejs内建的对象之一，用来字符串化对象或解析字符串。

body.urlencoded extend参数，true表示使用querystring解析，false表示用qs解析（可解析多级嵌套，但是有性能上的问题）