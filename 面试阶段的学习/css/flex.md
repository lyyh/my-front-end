### flex
使页面适应不同的屏幕尺寸和不同的显示设备。  
设置成flex布局的元素被当做了一个弹性容器，里面的元素成弹性项目。  
弹性容器有两根轴，弹性项目依次排列的那根轴成为主轴，垂直为主轴的那根轴称之为侧轴。  

### flex-inline
行内元素也可设置flex布局。  

### flex-direction
设置主轴的方向和起点  

### justify-content
设置项目在主轴上的对齐方式  

### flex-flow
flex-flow属性是flex-direction和flex-wrap的缩写，确定弹性项目如何布局  

### flex-grow
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。  


### flex-shrink
```
X2 = 2 * X1;
500 = 300 * X2 + 160 * X1 + 120 * X1;
```

### flex
flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写，描述弹性项目的整体的伸缩性。  
父级需要flex环境，子容器才能根据自身属性来布局，即瓜分父容器空间。说相反就是说如果父容器没有flex的环境，那么子容器就无法使用flex的规则来划分父容器的空间。    
### align-content
属性定义了多根轴线的对齐方式，如果只有一根则不会对齐  

### 影响
设置弹性容器之后，子元素的float、clear和vertical-middle都会失效  

### flex-basis
与width一样，设置子容器的初始化宽度。如果同时设置了flex-basis与width，那么flex-basis的优先级比width优先级高，width会被覆盖。如果其中一个为auto,那么另一个非auto的属性优先级就会更高。  

flex-basis和width为auto值，那最后的空间就是根据内容多少来定的，内容多占据的水平空间就多。  

### 参考
[Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
[深入理解CSS3 Flex](http://zhoon.github.io/css3/2014/08/23/flex.html)  

