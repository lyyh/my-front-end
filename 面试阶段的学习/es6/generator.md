## Generator
Generator函数是ES6提供的一种异步编程解决方案。Generator函数有多种理解角度。从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。调用generator函数后，返回的是一个指向内部状态的指针对象，也就是遍历器对象。下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。使用next指针移到哪一句时才会开始求值。  


### next方法的参数
yield句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。  

### 使用场景
使用for循环。yield如果用在一个表达式中，则必须放在括号内。yield语句用作函数参数或赋值表达式的右边，可以不加括号。  

```
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g
```
gen是一个Generator函数，调用它会生成一个遍历器对象g。它的Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己。  

### yield*
用来在一个 Generator 函数里面执行另一个 Generator 函数。    
如果yield命令后面跟的是一个遍历器对象，需要在yield命令后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*语句。  
任何数据结构只要有Iterator接口，就可以被yield*遍历。  