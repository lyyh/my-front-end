## 类式继承(构造器继承)
类式继承是在函数对象内调用父类的构造函数，使得自身获得类的属性和方法。call和apply方法为类式继承提供了支持。通过改变this的作用环境，使得子类本身具有父类的各种属性。
## 原型继承
它有别于类继承是因为继承不在对象本身，而在对象的原型上（prototype）。我们所说的原型继承就是将父对象的方法传递给子对象的原型。子类的构造函数中不拥有这些属性和方法。

##类式继承 与原型继承 对比
构造函数继承的方法都会存在于父对象中，每一次实例都会将function保存在内存中，这样的做法毫无以为会带来性能上的问题。其次类式继承在是不可改变的，在运行的时候无法动态的修改或者添加新的方法，这种方式是一种固步自封的方法。而原型继承是可以通过改变原型链接而对子类进行修改的。另外就是类式继承不支持多重继承，而对于原型继承来说，你只需要写好extend对对象进行扩展即可。

##组合模式
结合类式继承和原型继承的优点来对父类继续继承。另外的一种模式，是结合类继承和原型继承的各自优点来进行对父类的继承。用类式继承属性，而原型继承方法。这种模式避免了属性的公用，因为一般来说，每一个子类的属性都是私有的，而方法得到了统一。这种模式称为组合模式，也是继承类式常用到的一种方法。可以动态的修改方法，但是不能修改属性

##new 关键字和Object.create()方法
new关键字掩盖了Javascript中真正的原型继承，使得它更像是基于类的继承。其实new关键字只是Javascript在为了获得流行度而加入与Java类似的语法时期留下来的一个残留物”。用create的方法构造出来的对象，a属性和b方法都是在对象的原型上，也就是说我们可以通过更改father的属性动态改变obj的原型上的方法和属性，而上面通过new关键字用构造函数生成的实例，a属性是无法改变的  

## 结论
原型继承比较符合js这种语言的特点。因为它本身就是js强大的原型的一部分。而类式继承，与其称它为继承方式，毋宁说是一种函数的运用技巧来模拟继承罢了。本文是卤煮的一己之见，错误偏颇在所难免，如果有之，请各位斧正。  
原型继承和使用Object.create可以动态的修改属性和方法。