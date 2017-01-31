## Iterator
遍历器(Interator)是一种接口。为不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，具有iterator接口。就可以完成遍历操作（即依次处理该数据结构的所有成员）。  
### 作用
Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

### 循环遍历
Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环（详见下文）。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。  一种数据结构只要部署了Iterator接口，我们就称这种数据结构是”可遍历的“（iterable）。  
Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。  
### 调用场合
for...of循环  
解构赋值 扩展运算符 yield* 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。for...of
Array.from()
Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
Promise.all()
Promise.race()
### 使用范围
for...of循环可以使用的范围包括数组、Set 和 Map结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。