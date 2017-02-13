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