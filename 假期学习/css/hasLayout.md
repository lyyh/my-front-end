## 触发hasLayout的条件
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

## 概念
haslayout 是Windows Internet Explorer渲染引擎的一个内部组成部分。在Internet Explorer中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。为了调节这两个不同的概念，渲染引擎采用了 hasLayout 的属性，属性值可以为true或false。当一个元素的 hasLayout 属性值为true时，我们说这个元素有一个布局（layout）
当一个元素有一个布局时，它负责对自己和可能的子孙元素进行尺寸计算和定位。简单来说，这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完成这些工作。因此，一些元素默认会有一个布局。当我们说一个元素“拥有layout”或“得到layout”，或者说一个元素“has layout” 的时候，我们的意思是指它的微软专有属性 hasLayout 被设为了 true 。一个“layout元素”可以是一个默认就拥有 layout 的元素或者是一个通过设置某些 CSS 属性得到 layout 的元素。如果某个HTML元素拥有 haslayout 属性，那么这个元素的 haslayout 的值一定只有 true，haslayout 为只读属性 一旦被触发，就不可逆转。通过 IE Developer Toolbar 可以查看 IE 下 HTML 元素是否拥有haslayout，在 IE Developer Toolbar 下，拥有 haslayout 的元素，通常显示为“haslayout = -1”。  

## 什么是布局
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
