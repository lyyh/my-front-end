## a标签
加上#就不会刷新页面,href属性是显示:link,:visited的前提，如果 href 属性是一个正常的地址连接、为空、为"#"符号则显示visited样式,如果为"#"符号后面加任意一字符或者字符串、javascript:void(0)表达式则显示:link的样式：

a标签的4个伪类分别是:

　　:link ( 有链接属性的时候显示 -- href 属性 )

　　:visited ( 链接地址被访问过 )

　　:hover ( 鼠标移动到DOM节点上面 )

　　:active ( 鼠标点击瞬间 )

-> link & visited ?
/*css*/
a:link{
    color:green;
}
a:visited{
    color:red;
}
<a href="http://www.baidu.com">显示了:visited的样式</a>
<a href="#321312">显示了:link的样式</a>
<a href="#">显示了:visited的样式</a>
<a href="javascript:void(0)">显示了:link的样式</a>
<a href="">显示了:visited的样式</a>
<a>没有任何样式</a>
由上面的demo测试可以看出，标签拥有 href 属性是显示:link 或者 :visited的前提，如果 href 属性是一个正常的地址连接、为空、为"#"符号则显示visited样式,如果为"#"符号后面加任意一字符或者字符串、javascript:void(0)表达式则显示:link的样式：

-> hover & active ?
/*css*/
a:hover{
    color:red;
}
a:active{
    color:green;
}
<!--HTML-->
<a href="http://www.baidu.com">:active要放在:hover后面，点击时:active才起效</a>
上面的demo测试，:active伪类需要放在:hover伪类后面，因为当鼠标点击a标签的时候触发了:active同时也触发了:hover，如果:hover写在:active就会把:active的显示样式给覆盖，就是永远也看不到:active的点击样式

-> hover & visited ?
/*css*/
a:visited{
    color:yellow;
}
a:hover{    
    color:green;
}
<!--HTML-->
<a href="http://www.baidu.com">:visited需要放置在:hover前面</a>
上面的demo测试，:visited伪类需要放置在:hover前面，因为如果将:hover放置在:visited之前，:visited触发的链接会一开始就将:hover覆盖。

【总结】
　　对于a标签的四个伪类，就像是css的一条规则“后面覆盖签名的样式”，以上总结如果这四种伪类同时并存的话，其书写的顺序应该是 l ( :link ), v ( :visited ) , h ( :hover ) , a ( :active )。