## 前序
通过网络获取内容既缓慢，成本又高：大的响应需要在客户端和服务器之间进行多次往返通信，这拖延了浏览器可以使用和处理内容的时间，同时也增加了访问者的数据成本。因此，缓存和重用以前获取的资源的能力成为优化性能很关键的一个方面。  

浏览器发出的所有 HTTP 请求会首先被路由到浏览器的缓存，以查看是否缓存了可以用于实现请求的有效响应。如果有匹配的响应，会直接从缓存中读取响应，这样就避免了网络延迟以及传输产生的数据成本。  

### 各个头字段的作用
在响应过期之前，浏览器每次发起请求都会去获取响应的缓存资源。  
#### ETag
原因:在响应过期之后，发起新的请求，但此时如果服务器资源未被更改，再去下载资源会影响效率。    

ETag的作用:在响应过期之后，可以用来验证资源是否被更改。在响应过期之后的每次请求都会随着浏览器请求而发送。    

过程:客户端自动在If-None-Match HTTP 请求头中提供 ETag 令牌，服务器针对当前的资源检查令牌，如果未被修改过，则返回304 Not Modified响应，告诉浏览器缓存中的响应未被修改过，可以再延用 120 秒。注意，我们不必再次下载响应 - 这节约了时间和带宽。     

浏览器自动完成:动检测是否已指定了验证令牌，并会将验证令牌附加到发出的请求上，根据从服务器收到的响应，在必要时更新缓存时间戳。  

#### Cache-Control(http/1.1)
默认值为private
控制浏览器或者其他中继缓存如何缓存某个响应以及缓存多长时间。  

no-cache:必须先与服务器确认返回的响应是否被更改，然后才能使用该响应来满足后续对同一个网址的请求。因此，如果存在合适的验证令牌(ETag)，no-cache会发起往返通信来验证缓存的响应，如果资源未被更改，可以避免下载。    

no-store更加简单，直接禁止浏览器和所有中继缓存存储返回的任何版本的响应 - 例如：一个包含个人隐私数据或银行数据的响应。每次用户请求该资源时，都会向服务器发送一个请求，每次都会下载完整的响应。  

public:即使有关联的 HTTP 认证，甚至响应状态码无法正常缓存，响应也可以被缓存。大多数情况下，public不是必须的，因为明确的缓存信息（例如max-age）已表示 响应可以被缓存。  

private:通常只为单个用户缓存，因此，不允许任何中继缓存对其进行缓存 - 例如，用户浏览器可以缓存包含用户私人信息的 HTML 网页，但是 CDN 不能缓存。  

max-age:该指令指定从当前请求开始，允许获取的响应被重用的最长时间（单位为秒） - 例如：max-age=60表示响应可以再缓存和重用 60 秒。   

Cache-Control:  
max-age=86400   浏览器和任何中继缓存均可以将响应（如果是`public`的）缓存长达一天（60 秒 x 60 分 x 24 小时）  
private, max-age=600    客户端浏览器只能将响应缓存最长 10 分钟（60 秒 x 10 分）  
no-store    不允许缓存响应，每个请求必须获取完整的响应  

### 按需更新
出现的情况:
在响应有效期内，服务器更改资源文件。  

需要解决的问题:
一旦浏览器缓存了响应，在过期以前，将一直使用缓存的版本，这是由 max-age 或者 expires 指定的，或者直到因为某些原因从缓存中删除，例如用户清除了浏览器缓存。因此，在构建网页时，不同的用户可能使用的是文件的不同版本；刚获取该资源的用户将使用新版本，而缓存过之前副本（但是依然有效）的用户将继续使用旧版本的响应。  

如何客户端缓存和快速更新？  
 很简单，在资源内容更改时，我们可以更改资源的网址，强制用户下载新响应。通常情况下，可以通过在文件名中嵌入文件的指纹码（或版本号）来实现 - 例如 style.x234dff.css。  

缓存层级:
不但可以控制每个响应的缓存时间，还可以控制访问者看到新版本的速度。   
1.HTML 被标记成no-cache，这意味着浏览器在每次请求时都会重新验证文档，如果内容更改，会获取最新版本。同时，在 HTML 标记中，我们在 CSS 和 JavaScript 资源的网址中嵌入指纹码：如果这些文件的内容更改，网页的 HTML 也会随之更改，并将下载 HTML 响应的新副本。  
2.允许浏览器和中继缓存（例如 CDN）缓存 CSS，过期时间设置为 1 年。注意，我们可以放心地使用 1 年的'远期过期'，因为我们在文件名中嵌入了文件指纹码：如果 CSS 更新，网址也会随之更改。  
3.JavaScript 过期时间也设置为 1 年，但是被标记为 private，也许是因为包含了 CDN 不应缓存的一些用户私人数据。  
4.缓存图片时不包含版本或唯一指纹码，过期时间设置为 1 天。  

组合使用 ETag、Cache-Control和唯一网址，我们可以提供最佳的方案：较长的过期时间，控制可以缓存响应的位置，以及按需更新。   

定义缓存策略时，要注意如下技巧:  
1.使用一致的网址：如果您在不同的网址上提供相同的内容，将会多次获取和存储该内容。提示：注意，网址区分大小写！  
2.确保服务器提供验证令牌 (ETag)：通过验证令牌，如果服务器上的资源未被更改，就不必传输相同的字节。  
3.确定中继缓存可以缓存哪些资源：对所有用户的响应完全相同的资源很适合由 CDN 或其他中继缓存进行缓存。  
4.确定每个资源的最优缓存周期：不同的资源可能有不同的更新要求。审查并确定每个资源适合的 max-age。  
5.确定网站的最佳缓存层级：对 HTML 文档组合使用包含内容指纹码的资源网址以及短时间或 no-cache 的生命周期，可以控制客户端获取更新的速度。  
6.搅动最小化：有些资源的更新比其他资源频繁。如果资源的特定部分（例如 JavaScript 函数或一组 CSS 样式）会经常更新，应考虑将其代码作为单独的文件提供。这样，每次获取更新时，剩余内容（例如不会频繁更新的库代码）可以从缓存中获取，确保下载的内容量最少。  

### 参考资料
[HTTP缓存](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn)
[imweb-HTTP缓存控制](http://imweb.io/topic/5795dcb6fb312541492eda8c)