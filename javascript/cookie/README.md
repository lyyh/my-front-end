## cookie
某些 Web 站点在您的硬盘上用很小的文本文件存储了一些信息，这些文件就称为 Cookie。”—— MSIE 帮助。一般来说，Cookies 是 CGI 或类似，比 HTML 高级的文件、程序等创建的，但是 javascript 也提供了对 Cookies 的很全面的访问权利。  

每个网页，或者说每个站点，都有它自己的 Cookies，这些 Cookies 只能由这个站点下的网页来访问，来自其他站点或同一站点下未经授权的区域的网页，是不能访问的。每一“组”Cookies 有规定的总大小（大约 2KB 每“组”），一超过最大总大小，则最早失效的 Cookie 先被删除，来让新的 Cookie“安家”。  

与其它情况下的赋值不同，向 documents.cookie 赋值不会删除掉原有的 Cookies，而只会增添 Cookies 或更改原有 Cookie。赋值的格式：
```
documents.cookie = 'cookieName=' + escape('cookievalue')
+ ';expires=' + expirationDateObj.toGMTString();
```

是不是看到头晕了呢？cookieName 表示 Cookie 的名称，cookievalue 表示 Cookie 的值，expirationDateObj 表示储存着失效日期的日期对象名，如果不需要指定失效日期，则不需要第二行。不指定失效日期，则浏览器默认是在关闭浏览器（也就是关闭所有窗口）之后过期。


