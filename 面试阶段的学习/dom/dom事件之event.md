### Event
那么什么是DOM事件中Event对象呢？事件对象（event object）指的是与特定事件相关且包含该事件详细信息的对象。我们可以通过传递给事件处理程序的参数获取事件触发后所产生的一系列方法和属性。  

Event是一个事件处理程序的参数，当调用事件时，只需要将其传入事件处理函数就可以获取。  
```
function getEvent(event) {
    event = event || window.event;
}
```
上面的事件函数传入了一个名叫Event的参数作为事件对象，同时做了浏览器兼容处理。在IE8及以前本版之中，通过设置属性注册事件处理程序时，调用的时候并未传递事件对象，需要通过全局对象window.event来获取。所以上述代码中我们利用 || 来做判断，如果event对象存在则使用event，不存在则使用window.event。  

### Event对象方法
Event对象主要有以下两个方法，用于处理事件的传播（冒泡、捕获）和事件的取消。  

1.stopPropagation  
stopPropagation方法主要用于阻止事件的进一步传播，比如阻止事件继续向上层冒泡。  
```
function getEvent(event) {
    event.stopPropagation();
}

child.addEventListener('click', getEvent, false);
```
如果你需要兼容IE8及以下版本浏览器，则需要利用cancelBubble来代替stopPropagation，因为低版本IE不支持stopPropagation方法。   
```
function getEvent(event) {
    event = event || window.event;

    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
```
cancelBubble是IE事件对象的一个属性，设置这个属性为true能阻止事件进一步传播。  

2.preventDefault
preventDefault方法用于取消事件的默认操作，比如a链接的跳转行为和表单自动提交行为就可以用preventDefault方法来取消.  
通过preventDefault，我们成功阻止了a链接的跳转行为。不过，在IE9之前的浏览器中需要设置returnValue属性为false来实现。如下：  
```
function goFn(event) {
    event = event || window.event;

    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }

    console.log('我没有跳转！');
}
```


3.stopImmediatePropagation  
和stopPropagation相比，stopImmediatePropagation同样可以阻止事件的传播，不同点在于其还可以把这个元素绑定的同类型事件也阻止了  
```
var go = document.getElementById('go');

function goFn(event) {
    event.preventDefault();
    event.stopImmediatePropagation(); // 阻止事件冒泡并阻止同类型事件

    console.log('我没有跳转！');
}

function goFn2(event) {
    console.log('我是同类型事件！');
}

go.addEventListener('click', goFn, false);
go.addEventListener('click', goFn2, false);
```

### Event对象属性
1.type  
通过type我们可以获取事件发生的类型，比如点击事件我们获取的是'click'字符串。
2.target属性  
target属性主要用于获取事件的目标对象，比如我们点击a标签获取的是a标签的html对象。  
在IE8及之前版本，我们需要使用srcElement而非target。兼容方案如下：  
```
function goFn(event) {
    var event = event || window.event,    
        target = event.target || event.srcElement;

    console.log(target === go) // 返回true
}
```
