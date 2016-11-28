##toString
返回一个代表该对象的字符串  
当对象需要转换为字符串时，会调用它的toString()方法.。默认情况下，每个对象都会从Object上继承到toString()方法，如果这个方法没有被这个对象自身或者更接近的上层原型上的同名方法覆盖(遮蔽)，则调用该对象的toString()方法时会返回"[object type]"，这里的字符串type表示了一个对象类型。下面的代码演示了这一点：

### 使用toString()方法来检测对象类型

可以通过toString() 来获取每个对象的类型。为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，把需要检测的对象作为第一个参数传入。

var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]