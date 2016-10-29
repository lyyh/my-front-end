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