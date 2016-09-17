## localStorage
H5提供了两种在客户端存储数据的方法  
localStorage - 没有时间限制的数据存储  
sessionStorage - 针对一个 session 的数据存储  
1. 之前都是用cookie来完成的，但是cookie不适合存储大量的数据，每个cookie只能存储大概4kb的大小。因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。    
2. 在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。  
3. 对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。  
4. HTML5 使用 JavaScript 来存储和访问数据。   


### 本地存储的优点
1. 本地存储和cookie一样提供了把数据保存到本地的能力，页面刷新或者关掉浏览器后，数据依然存在
大！虽然不同浏览器的标准可能不一样，主流的一般都在5~10M，比cookie的4k强多了   
2. 本地存储的数据不会被发到服务器，与cookie相比，节省带宽，加快响应速度  

###localStorage 本地存储的共享区间
不同浏览器，分配给本地存储的空间是不一样的，譬如chrome是5M。这5M是整个子域共享的，例如http://www.alloyteam.com/2012/04/codejam/和http://www.alloyteam.com/2012/03/css3-checkbox/两个页面同在www.alloyteam.com域下，它们共享同一个本地存储空间，访问到的数据也是同一份；而http://csslib.alloyteam.com/在csslib.alloyteam.com域下，访问的是另一个存储空间。

一个unicode字符占2个字节（英文和中文一样），所以5M可以存储1024*1024/2=524288个字符，包括key和value。也就是说，localStorage.setItem(‘user’,’John’)向本地存储写进了8个字符（16Byte）。这个网站有一份各种浏览器分配给localStorage存储空间大小的表，你也可以在上面测试当前使用的浏览器支持多大的存储空间，不过它的数据有个问题，它没有考虑到一个unicode字符占2字节，因此它的数据应该全部乘2。  
当本地存储满了，再往里面写数据，将会触发error（这点和cookie的表现不一样），因此一个严谨的脚本应该捕捉写localStorage的错误  
```
var FIVE_MB=Array(5*1024*512).join('囧');
try{
  localStorage.setItem('x',FIVE_MB);
}catch(e){
  console.info('Oops');
}
```
当调用localStorage.clear()时，整个域的数据会被清空，包括和当前页面共享一个存储空间的其他页面。

### localStorage API
```
length：本地存储数据的个数
setItem(key,value)：向key字段写入value数据
getItem(key)：去key字段的数据
removeItem(key)：移除key字段
clear()：清空该域下的所有数据
key(i)：获取第i个数据的key
```
我们还可以像操作一个Object一样操作localStorage
```
var ls=localStorage;
ls['user']='John';
ls.setItem('work','codding');
console.info(ls.length); //2
console.info(ls.user + ' is ' + ls.work); //John is codding
ls['work']='debugging';
console.info(ls.user + ' is ' + ls.work); //John is debugging
delete ls['work'];
for(var i in ls){
  console.info(i + ' : ' + ls.getItem(i)); //user : John
  ls.removeItem(i);
}
```
唯一不同的是，对于一个不存在的字段notExist，localStorage.getItem(‘notExist’)会返回null，而localStorage[‘notExist’]则返回undefined。

### 一些细节
看到这里，你已经掌握了使用本地存储的方法了，下面的是我使用过程中的一些心得。
本地存储只能存字符串数据，所有数据在写入的时候会被隐式调用toString方法转为字符串，即
```
var ls=localStorage;
var data={
  user:"John",
  sex:"female"
};
ls.setItem('data',data);
ls.setItem('realData',JSON.stringify(data));
console.info(ls.data); //[object Object]
console.info(ls.realData); //{"user":"John","sex":"female"}
```
因此，需要存储json之类的数据时，需要自己做转换。
