### Generator
generator将异步编程从原始的嵌套式代码转化成扁平的按照顺序执行的代码。  


### 需要解决的问题
使用异步嵌套的方式会，如果代码量增多，越复杂，越不容易维护。使用异步并行时，无法获知并行异步调用完全完成的时间点。要解决的这些问题的主流方法如下:
1.自定义式事件方案  
2.Promise/Deferred  
3.高阶函数篡改回调函数  

### 高级函数在异步调用中的使用  
```
var pending = (function () {
  var count = 0;
  return function (callback) {
    count++;
    return function () {
      count--;
      if (count === 0) {
        callback();
      }
    };
  };
}());

var done = pending(function () {
  console.log('all is over');
});

fs.readFile('file1.txt', 'utf8', done());
fs.readFile('file2.txt', 'utf8', done());
```


### Generator扫盲
封装一段逻辑运算的单元是函数，函数只存在'被调用'和'未调用的情况',不存在一个函数被执行之后还能够暂停的情况。  
同时Genertor是一个状态机，其中封装了多个状态。执行Genertor会返回一个遍历器对象(返回的是一个指向内部状态的指针对象)，所以Genertor除了是状态机同时也是一个遍历器生成对象。返回遍历器的对象，可以依次遍历Generator函数内部的每一个状态。  

对于Generator而言，不仅可以将逻辑单元切分的更细致之外，还能暂停或者继续执行的间隔中，动态传入数据，使得代码更加灵活。  

#### yield
yield关键字让Generator内部的逻辑循环能够切割成多个部分。  
yield切割逻辑  
yield只能暂停Generator内部的逻辑，它并不是真正暂停整个线程，Generator外的业务逻辑依然会被继续执行下去。  


```
var compute = function* (a, b) {
  var foo = yield a + b;
  console.log(foo);
};
```
执行next方法之后，foo的结果为undefined，要想影响yield，可以通过next方法传参，  

### next
每次调用next的时候都会返回一个对象,布尔值done表示generator逻辑块是否执行完，value表示执行完yield语句后的表达式结果。  

可以通过next传递参数，赋值给yield关键字前面的变量声明  


### Generator异步编程
Generator将逻辑分块执行，获取上一段逻辑执行的结果，使用next()把结果传递给下一段逻辑继续执行。  

1.需要在回调函数中置入逻辑，用于搜集回调函数传入的数据  
2.通过.next()传入异步执行的结果，传递给yield,让业务流程继续执行  

### 小结
Generator进行流程控制的几个要点，每个异步方法都要标准化为yield关键字能够接受的方法，使我们有机会注入特殊逻辑，其次需要巧妙地将异步调用执行完成得到的结果通过.next()传递给下一段流程。最后，需要递归地将业务逻辑执行完成。  


### 参考资料
[Genertor与异步编程](http://www.infoq.com/cn/articles/generator-and-asynchronous-programming)  
