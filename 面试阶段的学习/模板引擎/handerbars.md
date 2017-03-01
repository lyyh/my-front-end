## handlebars
语义化模板，通过对views和data的分离来快速构建Web模板  
在加载时被预编译，而不是到了客户端执行到代码时再去编译，这样可以保证模板加载和运行的速度。  
JS脚本一样用script标签来包含handlebars.js    
使用script标签把一段模板加载到浏览器中    
handlebars表达式 {{value}}    

步骤:
1.获取模板   
2.预编译模板  
3.只需传递一个上下文context执行模板，即可返回得到HTML的值  

### 用法
不希望被HTML-escape编码:  
Handlebars的 {{expression}} 表达式会返回一个 HTML编码 HTML-escape 过的值,如果不希望Handlebars来编码这些值，使用三个大括号就行了{{{}}}    

不会对Handlebars.safeString安全字符串进行编码:
如果你写的 helper 用来生成 HTML，就经常需要返回一个 new Handlebars.SafeString(result)。在这种情况下，你就需要手动的来编码参数了。  

块级Helper:  
块级表达式允许你定义一个helpers，并使用一个不同于当前的上下文（context）来调用你模板的一部分。现在考虑下这种情况，你需要一个helper来生成一段 HTML 列表：  

注册一个helper:  
此时需要创建一个 名为 list 的 helper 来生成这段 HTML 列表。这个 helper 使用 people 作为第一个参数，还有一个 options 对象（hash哈希）作为第二个参数。这个 options 对象有一个叫 fn 的属性，你可以传递一个上下文给它（fn），就跟执行一个普通的 Handlebars 模板一样：   
```
Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";
  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }
  return out + "</ul>";
});
```
 
Handlebars支持简单的路径:  
Handlebars 同样也支持嵌套的路径，这样的话就可以在当前的上下文中查找内部嵌套的属性了。  

内置Helper:  
With helpers:切换上下文   
一般情况下，Handlebars 模板在计算值时，会把传递给模板的参数作为上下文。   

each helpers:each helper 来循环一个列表，循环中可以使用 this 来代表当前被循环的列表项。
事实上，可以使用 this 表达式在任何上下文中表示对当前的上下文的引用。  

if helper:if 表达式可以选择性的渲染一些区块。如果它的参数返回 false, undefined, null, "" 或 []（译注：还有 0）（都是JS中的“假”值），Handlebars 就不会渲染这一块内容：   

unless helper:unless helper 和 if helper　是正好相反的，当表达式返回假值时就会渲染其内容：    

log helper:log helper 可以在执行模板的时候输出当前上下文的状态。  






