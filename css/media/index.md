## css3媒体查询
1. 媒体查询 包含了一个媒体类型和至少一个使用如宽度、高度和颜色等媒体属性来限制样式表范围的表达式。CSS3加入的媒体查询使得无需修改内容便可以使样式应用于某些特定的设备范围。    
2. 在不使用 not 或 only 操作符的情况下，媒体类型是可选的，默认为 all 。  
3. 当媒体查询为真时，相关的样式表或样式规则就会按照正常的级联规则被应用。即使媒体查询返回假， <link> 标签上带有媒体查询的样式表 仍将被下载 （只不过不会被应用）。  
```
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
```


注意:link元素 与 样式表 两种方式都可以


### media 
设置Meta标签
首先我们在使用Media的时候需要先设置下面这段代码，来兼容移动设备的展示效果：
这段代码的几个参数解释：
width = device-width：宽度等于当前设备的宽度
initial-scale：初始的缩放比例（默认设置为1.0）  
minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）    
maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）   
user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面） 