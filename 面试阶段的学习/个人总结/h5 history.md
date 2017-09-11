### by zhangxinxu
1. 对于首屏载入的 html 页面，使用 history.replaceState 更改当前浏览器历史  
2. 兼容性 IE 10+  
3. 前进、后退  
4. pushState方法不会使hashchange发生，即使是新旧url只是hash不同  
5. replaceState 为了更加方便更新一个state对象或者当前history实体url  

### api 
#### window.history.back(); 
浏览器返回键
#### window.histroy.forward(); 
浏览器前进
#### window.history.go(-1); 
向后移动一页
#### window.history.go(1); 
向前移动一页  
#### history.pushState(stateObj,title,url)
提供给我们的是一种在不改变网页内容的前提下，操作浏览器历史记录的能力。这个api有三个参数，第二个参数目前浏览器都是忽略它的，在使用的时候一般传入空字符串即可；第三个参数对应的是新条目的地址，如果没有，默认就是当前文档的地址；第一个参数是一个object对象，它会与新条目绑定在一起，可以用来存储一些简单的数据，不过不能存太多，firefox对它的限制是640K，这个对象可以通过onpopstate事件对象的state属性来访问。

覆盖历史记录的情况：  
这个方法用来在浏览器历史记录栈中当前指针后面压入一条新的条目，然后将当前指针移到这条最新的条目；如果在压入新条目的时候，当前指针的后面还有旧的条目，在压入新的之后也会被废弃掉。整体特性其实跟上一篇博客介绍的，在同一个窗口打开另外一个页面对历史记录栈的作用完全相似，只不过history.pushState仅仅是添加新的条目，并且激活它，然后改变浏览器的地址，但是不会改变网页内容，它也不会去验证这个新条目对应的网页是否存在。

#### history.replaceState(stateObj,title,url)
这个api和history.pushState的用法完全一致，只不过它不会在历史记录栈中增加新的条目，只会影响当前条目，比如如果传递了stateObj，就会更新当前条目关联的状态对象；如果传递了url，就会替换当前条目的页面地址和更改浏览器地址栏的地址。有一种非常常见的场景，如果利用replaceState，可以优化它的实现方式。  

### history实体
HTML5引入了histtory.pushState()和history.replaceState()这两个方法，他们允许添加和修改history实体。  
window.location.href 与 history.pushState 相当于添加了新的history实体
history.replaceState 相当于修改了history实体  
window.history 获得当前history实体  

### 哪些会产生历史操作
popstate 触发操作：只在不会让浏览器页面刷新的历史记录之间切换才能触发
1. hash锚点（window.location.href）发生变化，不论前进后退
改变hash锚点的方式：  
1）直接更改浏览器地址，在最后面增加或改变#hash；   
2）通过改变location.href或location.hash的值；   
3）通过触发点击带锚点的链接；   
4）浏览器前进后退可能导致hash的变化，前提是两个网页地址中的hash值不同。  
2. forword、back、go 等 history api

pushState不能产生对hashchange有影响的历史操作,只有window.location.href才能产生对hashchange有影响的历史操作  
window.location.href会触发popstate  

history.pushState会增加历史记录的条目，但是不会触发hashchange和popstate；hashchange也可以增加历史记录的条目，但是它却可以触发popstate

### stateObj 
stateObj是会被持久化的硬盘上进行存储的，至少firefox是这么说的，我猜只要历史记录不销毁，它关联的stateObj就会一直存在。所以假如某一个网页在用户最后一次操作后，有关联某个stateObj，那么当用户再次打开这个网页的时候，它的stateObj也是可以被访问的。如果要直接访问当前网页对应条目的stateObj，可以通过history.state属性来访问。

### 微信内置浏览器后退100%触发popstate
A页面跳转到B页面，是直接刷新页面的那种跳转，location.href = xxx 的那种，按理说，这时候在B页面按回退按钮，也应该是直接刷新页面跳转到A页面，不会触发popstate，但是在微信浏览器中神奇的一幕发生了，先是像正常的直接刷新跳转一样跳转到了A页面，但是紧接着它触发了一个popstate事件

```
var bool = true;
pushHistory();

function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
};
window.onload = function () {
    setTimeout(function () {
        window.addEventListener('popstate', function () {
            if (bool == true) {
                alert()
            }
        });
    }, 0);
};

```


### 个人思考
1. 前进或者后退是否影响 session
2. pushState api 接口参数
3. 修改历史栈任意一条记录
4. replaceState 与 跳转google的例子
5. state对象必须是json字符串？且有大小限制？ http://blog.csdn.net/tianyitianyi1/article/details/7426606
6. pushState()有三个参数:state对象，标题(现在是被忽略，未作处理)，URL(可选)。url同域
7. pushState是否创建了history实体
8. 在各个ajax面板中传递信息使用histroy实体的state属性
9. 是否能直接读取history.state属性
10. 触发popState的时候并非使用xhr，而是从cache中读取异步内容
11. 同源 url 


### 与hash方式的比较
1. 你可以将任意的数据与你的新history实体关联。使用基于hash的方法，需要将所有相关的数据编码为一个短字符串。
2. hash拥有更好的兼容性
3. pushState更具有url的友好型，因为它比hashchange看起来更像是常规的跳转操作
4. 而且从url的规划层面来说，pushState的url跟原来的url形式都是根据具体场景而定的，hashchange可能就得用同一个url加不同的hash的形式了，这种形式对于系统设计跟seo来说也是不合理的  

### 参考资料
[理解浏览器历史记录](http://www.cnblogs.com/lyzg/archive/2016/10/21/5960609.html)  
[html5 history新特性](http://blog.csdn.net/tianyitianyi1/article/details/7426606)