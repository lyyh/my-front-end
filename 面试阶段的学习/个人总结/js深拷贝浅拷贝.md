### 深拷贝浅拷贝
#### 浅拷贝
```
var obj = { a:1, arr: [2,3] };
var shadowObj = shadowCopy(obj);

function shadowCopy(src) {
  var dst = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}
```
因为浅复制只会将对象的各个属性进行依次复制，并不会进行递归复制  

#### 深拷贝
深拷贝指的是对象属性所引用的对象全部进行新建对象复制，以保证深复制的对象的引用图不包含任何原有对象或对象图上的任何对象，隔离出两个完全不同的对象图。  
浅复制只会将对象的各个属性进行依次复制，并不会进行递归复制。  
可以拷贝数组和对象  
```
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};

```
深拷贝数组和对象     
最简单的深拷贝  
```
b = JSON.parse( JSON.stringify(a) )
```
不过这有局限性：  
1.无法复制函数  
2.原型链没了，对象就是object，所属的类没了。  