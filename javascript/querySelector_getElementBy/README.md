## querySelector与document.getElemenBy..的区别

随着现在浏览器的发展，目前几乎主流浏览器均支持了他们。包括 IE8(含) 以上版本、 Firefox、 Chrome、Safari、Opera。都支持querySelector 和 querySelectorAll 方法是W3C Selectors API规范中定义的。他们的作用是根据 CSS 选择器规范，使用和jquery查询方式一样，便捷定位文档中指定元素。  

querySelector和querySelectorAll的参数须是符合 css selector 的字符串。不同的是querySelector返回的是一个对象，querySelectorAll返回的一个集合(NodeList)。 
``` 
document.querySelector("body");//放回body节点
document.querySelector("#k");//返回id为k的节点
document.querySelector("#k span");//返回id为k的节点下的第一个span节点
document.querySelector("#k").querySelector("span");//返回id为k的节点下的第一个span节点

document.querySelectorAll("li");//返回所用tagName为li的节点集合（NodeList）
document.querySelectorAll("div .li");//返回class为li的div
```

可是现在主流框架，比如jquery，手机上的框架jqmobi等内部实现查找元都是使用的querySelector，等方法，性能低的方法被使用唯一理由就是它用着方便。
总结 ：
得到的元素不是需要很麻烦的多次getElementBy..的话，尽量使用getElementBy..,因为他快些。
得到的元素需要很麻烦的多次getElementBy..组合才能得到的话使用querySelector，方便。
看实际情况，你决定方便优先还是性能优先，
