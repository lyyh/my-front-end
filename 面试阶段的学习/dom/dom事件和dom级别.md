### dom事件与dom级别的对应关系  
DOM级别一共可以分为4个级别：DOM0级，DOM1级，DOM2级和 DOM3级，而DOM事件分为3个级别：DOM0级事件处理，DOM2级事件处理和DOM3级事件处理。  
为什么没有DOM1级事件处理呢？因为1级DOM标准中并没有定义事件相关的内容，所以没有所谓的1级DOM事件模型。  

#### DOM0级事件
这样的事件处理程序最大的缺点就是HTML于JS强耦合，我们一旦需要修改函数名就得修改两个地方。当然其优点是不需要操作DOM来完成事件的绑定。     

那么什么是DOM0级处理事件呢？DOM0级事件就是将一个函数赋值给一个事件处理属性，比如：  
```
<button id="btn" type="button"></button>

<script>
    var btn = document.getElementById('btn');

    btn.onclick = function() {
        alert('Hello World');
    }

    // btn.onclick = null; 解绑事件 
</script>
```

缺点:
1.DOM0级事件处理程序的缺点在于一个处理程序无法同时绑定多个处理函数,比如我还想在按钮点击事件上加上另外一个函数。  
2.HTML于JS强耦合，我们一旦需要修改函数名就得修改两个地方。  

#### DOM2级处理事件
DOM2级事件在DOM0级事件的基础上弥补了一个处理程序无法同时绑定多个处理函数的缺点，允许给一个处理程序添加多个处理函数。注意IE9+才支持addEventListener事件监听  
```
<button id="btn" type="button"></button>

<script>
    var btn = document.getElementById('btn');

    function showFn() {
        alert('Hello World');
    }

    btn.addEventListener('click', showFn, false);

    // btn.removeEventListener('click', showFn, false); 解绑事件 
</script>
```
DOM2级事件定义了addEventListener和removeEventListener两个方法，分别用来绑定和解绑事件，方法中包含3个参数，分别是绑定的事件处理属性名称（不包含on）、处理函数和是否在捕获时执行事件处理函数。  

需要注意的是IE8级以下版本不支持addEventListener和removeEventListener，需要用attachEvent和detachEvent来实现：
```
btn.attachEvent('onclick', showFn); // 绑定事件 
btn.detachEvent('onclick', showFn); // 解绑事件
```

### DOM3级事件
DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下：
1.UI事件，当用户与页面上的元素交互时触发，如：load、scroll  
2.焦点事件，当元素获得或失去焦点时触发，如：blur、focus  
3.鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup  
4.滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel  
5.文本事件，当在文档中输入文本时触发，如：textInput  
6.键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress  
7.合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart  
8.变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified  







