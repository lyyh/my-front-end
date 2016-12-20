## 等比例缩放
padding-bottom。padding-bottom 有一个让人很容易忽略的特性是当它的值是百分比形式时，百分比的基数是其所在元素的父元素的宽度而不是高度（同 padding-left 和 padding-right 一样）。这样解决方案也就非常明显了：  

将元素的 height 设成 0，使得元素的高度等于 padding-bottom；
合理设置 padding-bottom 的值。比如每个元素的 width 是 25%，现在想让元素的高度始终保持为其宽度的两倍，则 padding-bottom 的值应该设置为 50%。  

参考资料:https://www.w3ctech.com/topic/1483  
