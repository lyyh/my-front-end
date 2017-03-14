### Object create
概述:  
Object create 方法返回一个拥有指定原型和若干指定属性的对象  

语法:  
Object.create(proto, [ propertiesObject ])  

传递第一个参数的时候，可以创建一个以该参数为原型的对象。第二个参数是可选项，是一个匿名的参数对象,该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符(包括数据描述符与存取描述符)，比如说setter与getter


### Object defineProperty
方法直接在一个对象上定义一个新的属性，或者修改一个已经存在的属性，并返回这个对象。
```
概要
    Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。
语法
    Object.defineProperty(obj, prop, descriptor)
参数
    obj
        需要定义属性的对象。
    prop
        需被定义或修改的属性名。
    descriptor
        需被定义或修改的属性的描述符。
```

与Object.create的区别就是，Object.create只能在定义的时候指定一个setter与getter，该方法可以随时添加或者修改

### Object defineProperties
```
概述
    Object.defineProperties() 方法在一个对象上添加或修改一个或者多个自有属性，并返回该对象。
语法
    Object.defineProperties(obj, props)
参数
    obj
    将要被添加属性或修改属性的对象
    props
    该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置
```


### 什么是属性描述符
1.数据描述符是一个拥有可写或不可写值的属性。  
2.存取描述符是由一对 getter-setter 函数功能来描述的属性。  
3.描述符必须是两种形式之一；不能同时是两者。  

数据描述符和存取描述符均具有以下可选键值：  
```
configurable
    当且仅当这个属性描述符值为 true 时，该属性可能会改变，也可能会被从相应的对象删除。默认为 false。比如这个属性的属性描述符configurable true表示可以用delete删除。或者无法再进行配置。
enumerable  
    true 当且仅当该属性出现在相应的对象枚举属性中。默认为 false。
```

enumerable  
属性特性enumerable决定属性是否for...in或者Object.keys遍历到  

### 参考资料
[js添加对象属性](https://segmentfault.com/a/1190000003882976)




