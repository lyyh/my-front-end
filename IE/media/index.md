## media query 
IE8及一下都不兼容media query
可以使用respond.js 和 css3-mediaqueries-js两个库

### responedjs 实现思路
1.把head中所有<link rel=“sheetstyle” href=“xx”/>的css路径取出来放入数组  
2.然后遍历数组一个个发ajax请求  
3.ajax回调后仅分析response中的media   query的min-width和max-width语法，分析出viewport变化区间对应相应的css块  
4.页面初始化时和window.resize时，根据当前viewport使用相应的css块。  

responedJs必须依赖ajax请求css路径，那ajax就成了跨域问题。responedJs解决了跨域问题，即需要在cdn或服务器上引入静态页面   
### respond.js总结
1. 优点：压缩后仅1k,不跨域时性能ok，只需引入respond.js通用易用  
2. 缺点：仅支持media query的min-width和max-width（用于响应式够用）；支持跨域，虽然配置有点麻烦，实现跨域代价高而且有闪屏体验欠佳。  


### css3-mediaqueries-js
相对于respond.js css3-mediaqueries-js支持几乎所有的media query的语法，访问测试demo
#### 实现逻辑
其实现逻辑和respond.js差不多，只是更加支持的media query更加全面，同时支持内联style，支持各种宽度单位(em|ex|px|in|cm|mm|pt|pc),但是这里的初始化是在domready后执行，为了让用户感觉不出页面有闪屏（之前应用初始化样式然后js提取media query中的样式再覆盖一遍）现象，这里的实现是先将html移出可视区域外，等解析完media query后再重置回来，但实际目测感觉稍有闪屏（当然这里的测试是测试body背景色，移出可视区域外不管用，当然绝大部分响应式场景是适用的）  

其余实现和respond.js基本一致，也需要使用ajax，所以css3-media-queries.js本身不支持跨域，当然非要支持跨域也可以，也可以像respond.js一样使用代理页面跨域即可，但也会出现闪屏的现象。还是先看看不跨域情况下，大多数人为什么选择respond.js，主要原因还是完美支持的media query特性导致压缩后16K，下载和执行时间都逊于respond.js，下面是同域下在ie8的测试结果（耗时140ms而respond.js仅15ms）：   

#### css3-mediaqueries-js总结
优点：1、基本支持所有css3中的media query语法
缺点：1、不支持跨域（如cdn），就算支持了跨域也存在闪屏现象；2、和respond.js对比性能较差


### 两者主要区别
实现思路上不同，respondjs是页面初始化或者window.resize阶段发送ajax请求，根据viewport分析出对应的media query,css3-mediaqueries-js是在domready之后，将html移出可视区域外，等解析完media query后再重置回来，感觉稍微有闪屏

### 全局切换class
因为css/js需要放到cdn上面，需要跨域，css3-mediaqueries-js不支持跨域，respond.js支持跨域但是实现跨域后性能较差，有闪屏体验也差，而且配置麻烦，不方便各个业务通用。对比respond.js和css3-mediaqueries-js可知，实现响应式应用min-width和max-width足矣；同时模拟media query的效果只需要在2个关键时间点根据viewport切换css（初始化页面时和window.resize）即可。所以可以选择切换css link，可以动态切换css块,也可以切换class   
1. 切换css link（优点：逻辑清晰；缺点：增加请求数，维护麻烦，如修改一个模块涉及到3个尺寸的响应,至少需要改3个文件）  
2.切换内联css块(respond.js和css3-mediaqueries-js就是通过js分析出media query然后自动根据当前viewport切换css块，这个理想环境下是最好的，自动分析只管写media query，但是依赖ajax获取css内容，跨域实现成本高体验也不好)  
全局切换class(特别是初始化页面时最好在页面内容未开始渲染之前切换class，不然会出现像韩国naver购物频道在宽屏时刷新效果，刷新时内容由中间向外偏），特定viewport用特殊全局class标记，响应式样式继承在该class下

###结束语
#### 实现media query i8-兼容，respond.js在不跨域的情况下推荐使用（只有1k且不出现闪屏，使用方便，但会多一个ajax 304请求），但是跨域时（css/js在cdn）不推荐（会出现至少500ms间隔的闪屏，且需要在cdn上引入代理页面实现跨域）；css3-mediaqueries-js不推荐使用，其更多是mediaqueries的完全兼容实现，但min-width和max-width即可满足响应式实现的要求。基于以上，我们采用全局切换class的方式实现ie8-的兼容，引入less解决media query 和 兼容css的重复维护的问题。

参考链接
http://mux.alimama.com/posts/686

