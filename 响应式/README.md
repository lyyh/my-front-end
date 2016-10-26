### rem em
rem是相对于根元素的字体大小
em是相对于父级元素的字体大小
比如默认的 html font-size=16px，那么我想设置12px 的文字就是：12÷16=0.75（rem）
根元素（html）先设置一个font-size，一般情况下为了容易计算rem的值，会将根元素设置为62.5%，因为默认状态下，浏览器的默认文字大小为16px，16*0.625=10px，这样就有1rem=10px，用到数值就很容易计算。

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