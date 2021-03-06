## 形成条件
float 除了none以外的值   
overflow 除了visible 以外的值（hidden，auto，scroll ）   
display (table-cell，table-caption，inline-block)   
position（absolute，fixed）   
fieldset元素  

## 特性
BFC的特性：
1)块级格式化上下文会阻止外边距叠加  
当两个相邻的块框在同一个块级格式化上下文中时，它们之间垂直方向的外边距会发生叠加。换句话说，如果这两个相邻的块框不属于同一个块级格式化上下文，那么它们的外边距就不会叠加。  
2)块级格式化上下文不会重叠浮动元素  
根据规定，一个块级格式化上下文的边框不能和它里面的元素的外边距重叠。这就意味着浏览器将会给块级格式化上下文创建隐式的外边距来阻止它和浮动元素的外边距叠加。由于这个原因，当给一个挨着浮动的块级格式化上下文添加负的外边距时将会不起作用（Webkit和IE6在这点上有一个问题——可以看这个测试用例）。   
3)块级格式化上下文通常可以包含浮动  
