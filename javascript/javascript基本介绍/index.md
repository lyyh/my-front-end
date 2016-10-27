## javascript 宿主环境和javascript v8引擎
　JavaScript中很多时候会用到this，下面详细介绍每一种情况。在这里我想首先介绍一下宿主环境这个概念。一门语言在运行的时候，需要一个环境，叫做宿主环境。对于JavaScript，宿主环境最常见的是web浏览器，浏览器提供了一个JavaScript运行的环境，这个环境里面，需要提供一些接口，好让JavaScript引擎能够和宿主环境对接。JavaScript引擎才是真正执行JavaScript代码的地方，常见的引擎有V8(目前最快JavaScript引擎、Google生产)、JavaScript core。JavaScript引擎主要做了下面几件事情：
### javascript 主要做了如下几个事
1. 一套与宿主环境相联系的规则
2. JavaScript引擎内核（基本语法规范、逻辑、命令和算法);
3. 一组内置对象和API;
4. 其他约定。

### window global this
上面的八种情况可能大家已经绕晕了，总结起来就是：在浏览器里面this是老大，它等价于window对象，如果你声明一些全局变量(不管在任何地方)，这些变量都会作为this的属性。在node里面，有两种执行JavaScript代码的方式，一种是直接执行写好的JavaScript文件，另外一种是直接在里面执行一行行代码。对于直接运行一行行JavaScript代码的方式，global才是老大，this和它是等价的。在这种情况下，和浏览器比较相似，也就是声明一些全局变量会自动添加给老大global，顺带也会添加给this。但是在node里面直接脚本文件就不一样了，你声明的全局变量不会自动添加到this，但是会添加到global对象。所以相同点是，在全局范围内，全局变量终究是属于老大的。


### function this
1. 无论是在浏览器环境还是node环境， 除了在DOM事件处理程序里或者给出了thisArg(接下来会讲到)外，如果不是用new调用，在函数里面使用this都是指代全局范围的this。

2. 函数里面的this其实相对比较好理解，如果我们在一个函数里面使用this，需要注意的就是我们调用函数的方式，如果是正常的方式调用函数，this指代全局的this，如果我们加一个new，这个函数就变成了一个构造函数，我们就创建了一个实例，this指代这个实例，这个和其他面向对象的语言很像。另外，写JavaScript很常做的一件事就是绑定事件处理程序，也就是诸如button.addEventListener(‘click’, fn, false)之类的，如果在fn里面需要使用this，this指代事件处理程序对应的对象，也就是button。

### prototype this
1. 你创建的每一个函数都是函数对象。它们会自动获得一个特殊的属性prototype，你可以给这个属性赋值。当你用new的方式调用一个函数的时候，你就能通过this访问你给prototype赋的值了。  
2. 当你使用new为你的函数创建多个实例的时候，这些实例会共享你给prototype设定的值。对于下面的例子，当你调用this.foo的时候，都会返回相同的值，除非你在某个实例里面重写了自己的this.foo  
3. 实例里面的this是一个特殊的对象。你可以把this想成一种获取prototype的值的一种方式。当你在一个实例里面直接给this添加属性的时候，会隐藏prototype中与之同名的属性。如果你想访问prototype中的这个属性值而不是你自己设定的属性值，你可以通过在实例里面删除你自己添加的属性的方式来实现。  
4. 或者你也能直接通过引用函数对象的prototype 来获得你需要的值。  
5. 通过一个函数创建的实例会共享这个函数的prototype属性的值，如果你给这个函数的prototype赋值一个Array，那么所有的实例都会共享这个Array，除非你在实例里面重写了这个Array，这种情况下，函数的prototype的Array就会被隐藏掉。

