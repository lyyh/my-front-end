### zoom
zoom的包裹性，就是等比例缩放。但是不会改变内容高和宽  
跟transform:scale一样的效果    
可见在IE6下，zoom:2;让图片，包括外部的div放大两倍显示，IE7下也是如此，但是IE8下却有差异，在IE8（标准）下，zoom所放大的仅仅是内部元素，自身并没有放大.  
对于IE8，则zoom属性无“包裹性”，正如上面IE8下截图显示，IE8 zoom放大的是内部元素，父标签不缩放，于是父标签即使是个痿蛋0，其与内部元素的缩放一点关系也没有，也就没有的包裹的必要。所以IE6/7 zoom有包裹性，IE8没有。  


### 包裹解决浮动造成的影响
“包裹”确实可以解决浮动造成的影响，或者说用“包裹”来解释为什么这些CSS属性可以修复浮动元素父标签高度塌陷的问题是可行的。

### chrome
有等比例缩放的效果
### firefox
不支持zoom属性

### hasLayout
#### 什么是hasLayout
layout是windows IE的一个私有概念，它决定了元素如何对其内容定位和尺寸计算，以及与其他元素的关系和相互作用。当一个元素“拥有布局”时，它会负责本身及其子元素的尺寸和定位。而如果一个元素“没有拥有布局”，那么它的尺寸和位置由最近的拥有布局的祖先元素控制。  
必须说明的是，IE8及以上浏览器使用了全新的显示引擎，已经不在使用haslayout属性，因此文中提到的haslayout属性只针对IE6和IE7。  
#### 为什么会有hasLayout
理论上说，每个元素都应该控制自己的尺寸和定位，即每个元素都应该“拥有布局”，当然这只是理想状态。而对于早期的IE显示引擎来说，如果所有元素都“拥有布局”的话，会导致很大的性能问题。因此IE开发团队决定使用布局概念来减少浏览器的性能开销，即只将布局应用于实际需要的那些元素，所以便出现了“拥有布局”和“没有拥有布局”两种情况。  

#### 触发hasLayout
在实际开发过程中，很多IE下（IE6、IE7）的显示问题，都可以通过触发元素的haslayout来解决，下面列出一些常见的可以触发元素haslayout的属性和方法：  
1. float: left或right  
2. display: inline-block  
3. position: absolute  
4. width: 除auto外任何值  
5. height: 除auto外任何值  
6. zoom: 处normal外任何值  
7. writing-mode: tb-rl  
8. 
##### 在IE7中，以下属性也可以触发元素的haslayout    
1. min-height: 任意值
2. min-width: 任意值
3. max-height: 除none 外任意值
4. max-width: 除none 外任意值
5. overflow: 除visible外任意值，仅用于块级元素
6. overflow-x: 除visible 外任意值，仅用于块级元素
7. overflow-y: 除visible 外任意值，仅用于块级元素
8. position: fixed
5.haslayout引起的bug及解决方法

#### IE 很多常见的浮动 bug 
元素本身对一些基本属性的异常处理问题。  
相对定位的元素没有布局。  
拥有布局的元素外边距不叠加。  
当然可能还有一些我们没有发现的bug，一般情况下我们会使用zoom:   1;来触发haslayout从而来解决这些bug，因为zoom: 
1不会影响到元素的现有表现，虽然zoom:   
1。另外在IE6及较早版本的浏览器中还可以使用height: 1%来触发，IE7中可以使用min-height:0来触发。   


