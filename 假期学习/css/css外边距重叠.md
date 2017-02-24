## 外边距重叠
定义:两个或多个毗邻（父子元素或兄弟元素）的普通流中的块元素垂直方向上的 margin 会发生叠加。这种方式形成的外边距即可称为外边距叠加(collapsed margin)。  

毗邻:是指没有被非空内容、padding、border 或 clear 分隔开，说明其位置关系。可以是兄弟元素，也可能是父子元素。     

注意一点，在没有被分隔开的情况下，一个元素(非浮动元素等)的 margin-top 会和它普通流中的第一个子元素的 margin-top 相邻； 只有在一个元素的 height 是 “auto” 的情况下，它的 margin-bottom 才会和它普通流中的最后一个子元素(非浮动元素等)的 margin-bottom 相邻。  

外边距叠加的4个必要条件(2个或者多个、毗邻、垂直方向、普通流)  
### 避免外边距重叠
只要破坏外边距叠加的4个必要条件即可  

浮动元素和其他任何元素之间不发生外边距叠加 (包括和它的子元素).
创建了BFC的元素不会和它的子元素发生外边距叠加
绝对定位元素和其他任何元素之间不发生外边距叠加(包括和它的子元素).
inline-block元素和其他任何元素之间不发生外边距叠加 (包括和它的子元素).
普通流中的块级元素的margin-bottom永远和它相邻的下一个块级元素的margin-top叠加（除非相邻的兄弟元素clear）
普通流中的块级元素（没有border-top、没有padding-top）的margin-top和它的第一个普通流中的子元素（没有clear）发生margin-top叠加
普通流中的块级元素（height为auto、min-height为0、没有border-bottom、没有padding-bottom）和它的最后一个普通流中的子元素（没有自身发生margin叠加或clear）发生margin-bottom叠加
如果一个元素的min-height为0、没有border、没有padding、高度为0或者auto、不包含子元素，那么它自身的外边距会发生叠加

### 解决方案
1.父子元素(2种情况)之间发生margin重叠：
为父元素创建BFC  
为父元素设置相应的padding或者border  

2.兄弟元素之间发生margin外边距重叠  
让兄弟元素float  
让兄弟元素absolute  
让兄弟元素inline-block  

其中兄弟元素float如果上层兄弟元素float，下层不float仍会造成边距重叠。如果下层float，上层不float则不会造成边距重叠

其实外边距叠加margin-collapsing一直以来就是W3C所制定的一个规范，为了防止元素之间不小心同时设置了margin而不是期望中的效果，这本是一个合理存在的东西却被我们当做BUG来处理，这也是一个历史遗留了很久的问题，不要把它当做BUG来看，当做一个规范来看吧。其实最好的解决方案是在写结构的时候尽量去写一个方向的margin(top or bottom)，这样不就不会发生这样的问题了吗？    

### 参考资料
[cssmargin重叠](http://www.smallni.com/collapsing-margin/)
[张鑫旭cssmargin重叠问题](http://www.zhangxinxu.com/study/200908/margin-overlap.html)