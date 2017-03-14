### 定义setter与getter  
1.通过对象初始化器在创建对象的时候指明（也可以称为通过字面值创建对象时声明）  
```
(function () {
    var o = {
        a : 7,
        get b(){return this.a +1;},//通过 get,set的 b,c方法间接性修改 a 属性
        set c(x){this.a = x/2}
    };
    console.log(o.a);
    console.log(o.b);
    o.c = 50;
    console.log(o.a);
})();
```
set属性用于设置值，get属性用于获取值。