## API
offsetWidth
clientWidth
scrollWidth
offsetHeight
clientHeight
scrollHeight
offsetLeft
clientLeft
scrollLeft
offsetTop
clientTop
scrollTop  

为了理解这些属性，我们需要知道HTML元素的实际内容有可能比分配用来容纳内容的盒子更大，因此可能会出现滚动条，内容区域是视口，当实际内容比视口大的时候，需要把元素的滚动条位置考虑进去。  

1. clientHeight和clientWidth  
用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分  

2. offsetHeight和offsetWidth  
用于描述元素外尺寸，是指 元素内容+内边距+边框+滚动条，不包括外边距  

3. scrollWidth和scrollHeight  
子元素完整的高度和宽度,上下边距,左边距，overflow:hidden的部分也计算在内。   

4.clientTop和clientLeft  
返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左，上边框宽度    

5. offsetTop和offsetLeft  
表示该元素的左上角（边框外边缘）与已定位的父容器（offsetParent对象）左上角的距离  

6. offsetParent对象是指元素最近的定位（relative,absolute）祖先元素，递归上溯，如果没有祖先元素是定位的话，会返回null  

6.scrollLeft和scrollTop是指元素滚动条位置，它们是可写的
