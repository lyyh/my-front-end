## 清除浮动方式
比较推荐的方式：  
```
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
```


比较拉轰的方式:  
```
clr:after { content:;display:table;clear:both;}
.clr{overflow:hidden;zoom:1}
```

```
.clearall{overflow:hidden;_zoom:1;}方法不错，收了!!
```

### 为什么要使用伪元素:after解决，因为这对后期维护有印象
还是用伪元素:after来解决好，如果用overflow:hidden/auto，对后期维护会有影响的。

### 需要注意的问题 
zoom:1; 指的是ie7及以下触发hasLayout,也就是说ie7及以下才有清除浮动的影响      
IE6对overflow属性的理解有误，说白了是IE6的一个bug，IE7开始已经修复这个问题，也就是说IE7/IE8下overflow:hidden可以清除浮动造成的影响，您有兴趣可以自己测试一下。    
