## url各部分说明
```
http://user:pass@host.com:8080/p/a/t/h?query=string#hash
```
解析后对象字段如下：

href: 解析前的完整原始 URL，协议名和主机名已转为小写

例如: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

protocol: 请求协议，小写

例如: 'http:'

slashes: 协议的“：”号后是否有“/”

例如: true or false

host: URL主机名，包括端口信息，小写

例如: 'host.com:8080'

auth: URL中的认证信息

例如: 'user:pass'

hostname: 主机名，小写

例如: 'host.com'

port: 主机的端口号

例如: '8080'

pathname: URL中路径

例如: '/p/a/t/h'

search: 查询对象，即：queryString，包括之前的问号“?”

例如: '?query=string'

path: pathname 和 search的合集

例如: '/p/a/t/h?query=string'

query: 查询字符串中的参数部分（问号后面部分字符串），或者使用 querystring.parse() 解析后返回的对象

例如: 'query=string' or {'query':'string'}

hash: 锚点部分（即：“#”及其后的部分）

例如: '#hash'

### url.parse
将URL字符串转换为对象：url.parse(urlStr[, parseQueryString][, slashesDenoteHost])
url.parse()方法用于解析URL对象，解析后返回一个JSON对象。示例如下：

第二个可选参数设置为true时，会使用querystring模块来解析URL中德查询字符串部分，默认为 false。
第三个可参数设置为 true时，会把诸如 //foo/bar 这样的URL解析为 { host: 'foo', pathname: '/bar' } 而不是 { pathname: '//foo/bar' }。 默认为 false。


### 将对象格式化为URL字符串：url.format(urlObj)
url.resolve()用于格式化URL对象。输入一个 URL 对象，返回格式化后的 URL 字符串。示例如下：

### URL路径处理：url.resolve(from, to)
url.resolve()方法用于处理URL路径，也可以用于处理锚点。示例如下：
```
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
```