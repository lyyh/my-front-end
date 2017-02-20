## 兼容性
Internet Explorer 10、Firefox、Opera 和 Chrome 支持 transition 属性。
Safari 支持替代的 -webkit-transition 属性。
注释：Internet Explorer 9 以及更早版本的浏览器不支持 transition 属性。


### 属性。
transition 属性是一个简写属性，用于设置四个过渡属性：
transition-property
transition-duration
transition-timing-function
transition-delay

### 简单描述
transition 用于指定变化所需要的时间    
transition-timing-function 速度曲线 linear相同的速度     
让height先变化，等结束后再让width变化  使用delay，指定了动画发生的顺序  

### transition-timing-function
linear：匀速  
ease:先加速后减速  
ease-in：加速  
ease-out：减速  
cubic-bezier函数：自定义速度模式  


### transition
1）目前，各大浏览器（包括IE 10）都已经支持无前缀的transition，所以transition已经可以很安全地不加浏览器前缀。
（2）不是所有的CSS属性都支持transition，完整的列表查看这里，以及具体的效果。
（3）transition需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height从0px变化到100px，transition可以算出中间状态。但是，transition没法算出0px到auto的中间状态，也就是说，如果开始或结束的设置是height: auto，那么就不会产生动画效果。类似的情况还有，display: none到block，background: url(foo.jpg)到url(bar.jpg)等等。  

### transition的局限性
transition的优点在于简单易用，但是它有几个很大的局限。
（1）transition需要事件触发，所以没法在网页加载时自动发生。  
（2）transition是一次性的，不能重复发生，除非一再触发。  
（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。  
（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。  