## 外部作用域影响内部作用域
```
//面试经典问题:

        function onMyLoad(){
            /*
            抛出问题:
                此题的目的是想每次点击对应目标时弹出对应的数字下标 0~4,但实际是无论点击哪个目标都会弹出数字5
            问题所在:
                arr 中的每一项的 onclick 均为一个函数实例(Function 对象),这个函数实例也产生了一个闭包域,
                这个闭包域引用了外部闭包域的变量,其 function scope 的 closure 对象有个名为 i 的引用,
                外部闭包域的私有变量内容发生变化,内部闭包域得到的值自然会发生改变
            */
            var arr = document.getElementsByTagName("p");
            for(var i = 0; i < arr.length;i++){
                arr[i].onclick = function(){
                    alert(i);
                }
            }
        }
```

方案一：
