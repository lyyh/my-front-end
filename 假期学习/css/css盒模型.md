### css盒模型
css盒模型是元素大小呈现的方式  

文档中的每个元素被描绘为矩形盒子。渲染引擎的目的就是判定大小，属性——比如它的颜色、背景、边框方面——及这些盒子的位置。  

在CSS中，这些矩形盒子用 标准盒模型 来描述。这个模型描述了一个元素所占用的空间。每一个盒子有四条边界：外边距边界margin edge, 边框边界border edge, 内边距边界padding edge 与 内容边界content edge。   

#### 四个区域
1.内容区域。是真正包含元素内容的区域。位于内容边界的内部，它的大小为内容宽度 或 content-box宽及内容高度或content-box高。  
2.内边距区域。用内容及可能的边框之间的空白区域扩展内容区域。它位于内边距边界内部，通常有背景——颜色或图片（不透明图片盖住背景颜色）. 它的大小为 padding-box  宽与 padding-box 高。  
3.边框区域。是包含边框的区域，扩展了内边距区域。它位于边框边界内部，大小为 border-box  宽和 border-box 高。由 border-width 及简写属性 border控制。  

#### box-sizing属性
css3的属性。  
box-sizing: border-box;此元素的内边距和边框不再会增加它的宽度,因为元素的内边距和边框会加入到元素内容区域的计算。IE8+兼容。content-sizing是由CSS2.1规定的高度行为。
border-sizing:为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。  


### 参考资料
[w3help-css盒模型](http://www.w3help.org/zh-cn/kb/006/)  