### 什么是hasLayout
hasLayout是IE的一个私有概念，决定了元素如何对其内容和尺寸计算，以及与其他元素的关系和相互作用。  当一个元素“拥有布局”时，它会负责本身及其子元素的尺寸和定位。而如果一个元素“没有拥有布局”，那么它的尺寸和位置由最近的拥有布局的祖先元素控制。  

必须说明的是，IE8及以上浏览器使用了全新的显示引擎，已经不在使用haslayout属性，因此文中提到的haslayout属性只针对IE6和IE7。  

### 为什么会有hasLayout
理论上说，每个元素都应该控制自己的尺寸和定位，即每个元素都应该“拥有布局”，当然这只是理想状态。而对于早期的IE显示引擎来说，如果所有元素都“拥有布局”的话，会导致很大的性能问题。因此IE开发团队决定使用布局概念来减少浏览器的性能开销，即只将布局应用于实际需要的那些元素，所以便出现了“拥有布局”和“没有拥有布局”两种情况。  

### 默认情况下拥有布局的元素 

```
html, body
table
tr, td
img
hr
input, select, textarea, button
iframe, embed, object, applet
marquee
```



### 查看和触发hasLayout
haslayout是windows IE私有的，而且它不是css属性，我们无法通过css显式的设置元素的haslayout。但我们可以通过javascript来查看一个元素是否拥有布局：  
```
<div id="div1">这是一个div</div>;

var oDiv = document.getElementById('div1');
alert(oDiv.currentStyle.hasLayout);    //弹出false
```
如果元素拥有布局，obj.currentStyle.hasLayout就会返回true，否则返回false。hasLayout是一个只读属性，所以也无法通过javascript进行设置。  

IE(IE6、IE7)  
```
float: left或right
display: inline-block
position: absolute
width: 除auto外任何值
height: 除auto外任何值
zoom: 处normal外任何值
writing-mode: tb-rl
```
IE7下，以下属性也可触发hasLayout  
```
min-height: 任意值
min-width: 任意值
max-height: 除none 外任意值
max-width: 除none 外任意值
overflow: 除visible外任意值，仅用于块级元素
overflow-x: 除visible 外任意值，仅用于块级元素
overflow-y: 除visible 外任意值，仅用于块级元素
position: fixed
```


一般情况下我们会使用zoom: 1;来触发haslayout从而来解决这些bug，因为zoom: 1不会影响到元素的现有表现，虽然zoom: 1无法在IE5.0中触发haslayout，但是IE5.0已经不在我们的测试范围内了，所以可以放心的使用zoom: 1。另外在IE6及较早版本的浏览器中还可以使用height: 1%来触发，IE7中可以使用min-height: 0来触发。  

### 触发hasLayout的条件
position: absolute 
float: left|right 
display: inline-block 
width: 除 “auto” 外的任意值 
height: 除 “auto” 外的任意值 （例如很多人闭合浮动会用到 height: 1%  ） 
zoom: 除 “normal” 外的任意值 (MSDN) http://msdn.microsoft.com/worksh ... properties/zoom.asp 
writing-mode: tb-rl (MSDN) http://msdn.microsoft.com/worksh ... ies/writingmode.asp

在 IE7 中，overflow 也变成了一个 layout 触发器：
overflow: hidden|scroll|auto （ 这个属性在IE之前版本中没有触发 layout 的功能。 ）
overflow-x|-y: hidden|scroll|auto （CSS3 盒模型中的属性，尚未得到浏览器的广泛支持。他们在之前IE版本中同样没有触发 layout 的功能）  

### 概念
haslayout 是Windows Internet Explorer渲染引擎的一个内部组成部分。在Internet Explorer中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。为了调节这两个不同的概念，渲染引擎采用了 hasLayout 的属性，属性值可以为true或false。当一个元素的 hasLayout 属性值为true时，我们说这个元素有一个布局（layout）
当一个元素有一个布局时，它负责对自己和可能的子孙元素进行尺寸计算和定位。简单来说，这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完成这些工作。因此，一些元素默认会有一个布局。当我们说一个元素“拥有layout”或“得到layout”，或者说一个元素“has layout” 的时候，我们的意思是指它的微软专有属性 hasLayout 被设为了 true 。一个“layout元素”可以是一个默认就拥有 layout 的元素或者是一个通过设置某些 CSS 属性得到 layout 的元素。如果某个HTML元素拥有 haslayout 属性，那么这个元素的 haslayout 的值一定只有 true，haslayout 为只读属性 一旦被触发，就不可逆转。通过 IE Developer Toolbar 可以查看 IE 下 HTML 元素是否拥有haslayout，在 IE Developer Toolbar 下，拥有 haslayout 的元素，通常显示为“haslayout = -1”。  

### 什么是布局
Windows 上的IE 使用布局概念来控制元素的尺寸和定位。那些称为拥有布局(have layout)的元素负责本身及其子元素的尺寸和定位。如果一个元旦在没有拥有布局，那么它的尺寸和位置由最近的拥有布局的祖先元素控制。  

IE 显示引擎利用布局概念减少它的处理开销。在理想悄况下，所有元素都控制自己的尺寸和定位。但是，这会在IE中导致很大的性能问题。因此，IE/Win 开发团队决定只将布局应用于实际需要它的那些元素，这样就可以充分地减少性能开销。  

在默认情况下拥有布局的元素包括:  
```
body
标准模式中的 html
table
tr, td
img
hr
input, select, textarea, button
iframe, embed, object, applet
marquee
```
布局概念是Windows 上的I E 特有的，而且它不是CS S 属性.尽管某些CSS   属性会使元ffi拥有布局，但是在CSS 巾无法显式地设宣布局.可以使用JavaScript 函数hasLayout 查看一个元亲是否拥有布局.如果元素拥有布局，这个函数就返回true ; 否则返回falseo hasLayout 是一个只读属性，所以无法使用JavaScript 选行设置.  


