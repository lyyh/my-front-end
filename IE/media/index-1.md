### 响应式布局
响应式布局，理想状态是，对PC/移动各种终端进行响应。媒体查询的支持程度是IE9+以及其他现代的浏览器，但是IE8在市场当中仍然占据了比较大量的市场份额，使我们不得不进行IE低端浏览器的考虑。

## respond.js原理
插件原理：
接下来，需要理解respond.js的实现思路：
第一步，将head中所有外部引入的CSS文件路径取出来存储到一个数组当中；
第二步，遍历数组，并一个个发送AJAX请求；
第三步，AJAX回调后，分析response中的media query的min-width和max-width语法（注意，仅仅支持min-width和max-width），分析出viewport变化区间对应相应的css块；
第四步，页面初始化时和window.resize时，根据当前viewport使用相应的css块。

### 核心结论
那么此时，就可以根据基本的实现思路，得到一些书写代码时要注意的地方：
1、需要启动本地服务器（localhost），不能使用普通本地的url地址（file://开头）；
2、需要外部引入CSS文件，将CSS样式书写在style中是无效的；
3、由于respond插件是查找CSS文件，再进行处理，所以respond文件一定要放置在CSS文件的后面
4、另外，虽然把respond放置在head里还是在body后面都能够实现，但是建议放置在head中（具体原因在下面的文档提示中有提到）
5、最好不要为CSS设置utf-8的编码，使用默认（原因详见下面的文档提示部分）

### 文档提示
在官方文档当中的一些提示：
1、越早的引入respond.js文件，也就越可能避免IE下出现的闪屏。
2、不支持嵌套的媒体查询
3、utf-8的字符编码对respond.js文件的运行有影响
官方API原文：if CSS files are encoded in UTF-8 with Byte-Order-Mark, they will not work with Respond.js in IE7 or IE8.
基本含义就是：utf-8格式的CSS文件字符编码会对插件造成影响。
但是在我使用IE6-8进行测试的时候，都能够正常显示（无论是在css文件中增加charset设置还是在link标签中增加charset设置）。因此，并不是太清楚这个位置bug的含义。
4、跨域可能会出现闪屏（还没有测试，具体情况不详）

### css3-mediaqueries-js
css3-mediaqueries-js官方文档和demo都没有，相对于respond.js css3-mediaqueries-js支持几乎所有的media query的语法。会出现闪屏。并不是很推荐使用，虽然能够支持全部的mediaqueries，但min-width和max-width其实就可以满足我们对响应式布局的需要。
 
 