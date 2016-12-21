## navigation对象
原理:iframe之间是共享navigator对象的，用它来传递信息  
要求:IE6/7  
有些人注意到了IE6/7的一个漏洞：iframe之间的window.navigator对象是共享的。 我们可以把它作为一个Messenger，通过它来传递信息。比如一个简单的委托：  
```
// a.com
navigation.onData(){
    // 数据到达的处理函数
}
typeof navigation.getData === 'function' 
    || navigation.getData()

// b.com
navigation.getData = function(){
    $.get('/path/under/b.com')
        .success(function(data){
            typeof navigation.onData === 'function'
                || navigation.onData(data)
        });
}
```

