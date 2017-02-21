### 变量声明带上var
1. 如果声明变量忘记了var，那么js引擎将会遍历整个作用域查找这个变量，结果不管找到与否，都是悲剧。  
如果在上级作用域找到了这个变量，上级作用域变量的内容将被无声的改写，导致莫名奇妙的错误发生。  
如果在上级作用域没有找到该变量，这个变量将自动被声明为全局变量，然而却都找不到这个全局变量的定义。   
### 慎用全局变量
1. 全局变量需要搜索更长的作用域链。  
2. 全局变量的生命周期比局部变量长，不利于内存释放。  
3. 过多的全局变量容易造成混淆，增大产生bug的可能性。  

### 缓存重复使用的全局变量
1. 全局变量要比局部变量需要搜索的作用域长  
2. 重复调用的方法也可以通过局部缓存来提速  
3. 该项优化在IE上体现比较明显  


### 通过原型优化方法定义
1. 如果一个方法类型将被频繁构造，通过方法原型从外面定义附加方法，从而避免方法的重复定义。   
2. 可以通过外部原型的构造方式初始化值类型的变量定义。（这里强调值类型的原因是，引用类型如果在原型中定义， 一个实例对引用类型的更改会影响到其他实例。）  

javascript原型的概念:
1.构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。我们可 以把那些不变的属性和方法，直接定义在prototype对象上。  
2.在实例中添加一个与实例原型同名属性，那该属性就会屏蔽原型中的属性。  
3.通过delete操作符可以删除实例中的属性  

### 用for代替for...in...遍历数组
for…in…内部实现是构造一个所有元素的列表，包括array继承的属性，然后再开始循环。相对for循环性能要慢。  

### 使用原始操作代替方法调用
方法调用一般封装了原始操作，在性能要求高的逻辑中，可以使用原始操作代替方法调用来提高性能。    
原始操作  
```
var min = a < b ? a : b;
```
方法实例  
```
var min = Math.min(a, b);
```


### Gzip压缩
Gzip通常可以减少70%网页内容的大小，包括脚本、样式表、图片等文件。Gzip比deflate更高效，主流服务器都有相应的 压缩支持模块。  

Gzip的工作流程为:  
1.客户端在请求Accept-Encoding中声明可以支持gzip  
2.服务器将请求文档压缩，并在Content-Encoding中声明该回复为gzip格式  
3.客户端收到之后按照gzip解压缩  

### 设置Cache-Control和Expires头
通过Cache-Control和Expires头可以将脚本文件缓存在客户端或者代理服务器上，可以减少脚本下载的时间。  

### 异步加载脚本
脚本加载与解析会阻塞HTML渲染，可以通过异步加载方式来避免渲染阻塞。  
异步加载的方式很多，比较通用的方法是通过类似下面的代码实现，  

### DOM操作优化
DOM操作性能问题主要有以下原因，
1.DOM元素过多导致元素定位缓慢  
2.大量的DOM接口调用  
3.DOM操作触发频繁的reflow(layout)和repaint  
4.DOM元素过多会使DOM元素查询效率，样式表匹配效率降低，是页面性能最主要的瓶颈之一。  

关于reflow(layout和repaint可以参考下图，可以看到layout发生在repaint之前，所以layout相对来说会造成更多性能 损耗。  
reflow(layout)就是计算页面元素的几何信息repaint就是绘制页面元素  

### 优化css样式转换
如果需要动态更改CSS样式，尽量采用触发reflow次数较少的方式。

例如以下代码逐条更改元素的几何属性，理论上会触发多次reflow
```
element.style.fontWeight = 'bold';
element.style.marginLeft= '30px';
element.style.marginRight = '30px';
```
可以通过直接设置元素的className直接设置，只会触发一次reflow
```
element.className = 'selectedAnchor';
```

### 优化节点添加
多个节点插入操作，即使在外面设置节点的元素和风格再插入，由于多个节点还是会引发多次reflow。优化的方法是创建 DocumentFragment，在其中插入节点后再添加到页面。  

### 优化节点修改
对于节点的修改，可以考虑使用cloneNode在外部更新节点然后再通过replace与原始节点互换。
```
var orig = document.getElementById('container');
var clone = orig.cloneNode(true);
var list = ['foo', 'bar', 'baz'];
var contents;
for (var i = 0; i < list.length; i++) {
  content = document.createTextNode(list[i]);
  clone.appendChild(content);
}
orig.parentNode.replaceChild(clone, orig);
```

### 减少使用元素位置操作
一般浏览器都会使用增量reflow的方式将需要reflow的操作积累到一定程度然后再一起触发，但是如果脚本中要获取以下 属性，那么积累的reflow将会马上执行，已得到准确的位置信息。  
1.offsetLeft  
2.offsetTop  
3.offsetHeight  
4.offsetWidth  
5.scrollTop/Left/Width/Height  
6.clientTop/Left/Width/Height  
7.getComputedStyle()  

### 使用事件代理
1. 当存在多个元素需要注册事件时，在每个元素上绑定事件本身就会对性能有一定损耗。  
2. 由于DOM Level2事件模 型中所有事件默认会传播到上层文档对象，可以借助这个机制在上层元素注册一个统一事件对不同子元素进行相应处理。  
3.捕获型事件先发生。两种事件流会触发DOM中的所有对象，从document对象开始，也在document对象结束。  


### 动画优化
动画效果在缺少硬件加速支持的情况下反应缓慢，例如手机客户端
### 设置动画元素为absolute或者fixd
position: static 或position: relative元素应用动画效果会造成频繁的reflow  
position: absolute或position: fixed 的元素应用动画效果只需要repaint  

### 使用一个timer完成多个动画效果
动画效果的帧率最优化的情况是使用一个timer完成多个对象的动画效果，其原因在于多个timer的调用本身就会损耗一定 性能。

```
setInterval(function() {
  animateFirst('');
}, 10);
setInterval(function() {
  animateSecond('');
}, 10);
```

使用同一个timer
```
setInterval(function() {
  animateFirst('');
  animateSecond('');
}, 10);
```
