### 箭头函数
#### 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
```
 function Foo(){
      this.getA = function(){
        return () => {
         console.log(this)
        } 
      }
   }
   var foo = new Foo();
   foo.getA()() //foo
```
如果使用箭头函数，以前的那种hack写法：
var that = this;
就不再需要了。

由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：
```
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);
    }
};
obj.getAge(2015); // 25
```