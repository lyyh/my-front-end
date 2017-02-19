### elem:nth-child(n)
这个伪类选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数值，也可以接受函数（如4n-1）。需要注意的是，n是从1开始计算，而不是0。

### elem:nth-last-child(n)
和nth-child伪类一样的思路，只是技术方式改为倒数计算，所以，我们可以选择后n个元素

### elem:last-child
选中的最后一个子元素


### elem:only-child
要是elem是父元素下唯一的子元素，这选中之

### elem:nth-of-type(n)
选择父元素下第n个elem元素，n接受的格式和nth-child一样。甚至在绝大多数情况下，nth-of-type的效果甚至和nth-child没有区别，那这两个伪类到底是什么区别呢。注意：

elem:nth-of-type(n)是“选择父元素下第n个elem元素”。

而elem:nth-child(n)是“这个伪类选中父元素下的第n个子元素，并且这个子元素的标签名为elem”。

### elem:first-of-type和elem:last-of-type
不言而喻，选中父元素下第1个/最后一个elem元素。

### elem:only-of-type
如果父元素下的子元素只有一个elem元素，选中该元素。elem:only-of-type和elem:only-child不同的是，后者父元素下只能有一个子元素；而前者这不一定，只要父元素下只有一个elem标签就行。

### 

