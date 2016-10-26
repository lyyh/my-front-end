### rem em
rem是相对于根元素的字体大小
em是相对于父级元素的字体大小
比如默认的 html font-size=16px，那么我想设置12px 的文字就是：12÷16=0.75（rem）
根元素（html）先设置一个font-size，一般情况下为了容易计算rem的值，会将根元素设置为62.5%，因为默认状态下，浏览器的默认文字大小为16px，16*0.625=10px，这样就有1rem=10px，用到数值就很容易计算。  

任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明 Font-size=62.5%，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。  

可以用rm和rem来设置width和height
font-size: 62.5%或更小的时候  px和rem比值不变
在IE firefox中 比值 1:10  
在chrome 比值 1:12 

### em转化
因为“em”就是一个相对值，而且是一个相对于父元素的值，其真正的计算公式是：
1 ÷ 父元素的font-size × 需要转换的像素值 = em值

### 移动端web页面 
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```
该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。也许允不允许用户缩放不同的网站有不同的要求，但让viewport的宽度等于设备的宽度，这个应该是大家都想要的效果，如果你不这样的设定的话，那就会使用那个比屏幕宽的默认viewport，也就是说会出现横向滚动条。 

任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明 Font-size=62.5%，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。

### viewport元标签
#### 背景
移动端浏览器（如Fennec）在一个通常比屏幕更宽的虚拟”窗口“（视口）中渲染页面，从而无需将所有页面都压缩进小屏幕里（那样会把很多没有针对移动端进行优化的站点打乱）。用户可以通过平移和缩放来浏览页面的不同区域。  

视口基础EDIT
一个典型的针对移动端优化的站点包含类似下面的内容：

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
width属性控制视口的宽度。可以像width=600这样设为确切的像素数，或者设为device-width这一特殊值来指代比例为100%时屏幕宽度的CSS像素数值。（相应有height及device-height属性，可能对包含基于视口高度调整大小及位置的元素的页面有用。）

initial-scale属性控制页面最初加载时的缩放等级。maximum-scale、minimum-scale及user-scalable属性控制允许用户以怎样的方式放大或缩小页面。

#### 视口宽度和屏幕宽度
对于设置了初始或最大缩放的页面，width属性实际上变成了最小视口宽度。比如，如果你的布局需要至少500像素的宽度，那么你可以使用以下标记。当屏幕宽度大于500像素时，浏览器会扩展视口（而不是放大页面）来适应屏幕：

<meta name="viewport" content="width=500, initial-scale=1">
Fennec 1.1还增加了对minimum-scale、 maximum-scale以及user-scalable的支持，采用与Safari类似的默认值与限制。这些属性会影响初始尺寸及宽度，并且会限制缩放等级。

移动浏览器在处理屏幕方向改变时稍有差异。例如，Mobile Safari通常在竖屏转横屏时只缩放页面，而不会把页面重新布局成横屏载入时的效果。如果web开发者想让iPhone在方向切换时保持固定比例，需要增加一个maximum-scale值来避免这样的的缩放，这会带来并非预期的禁止用户缩放页面的副作用：

<meta name="viewport" content="initial-scale=1, maximum-scale=1">