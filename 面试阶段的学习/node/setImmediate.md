## setImmediate
这算一个比较新的定时器，目前IE11/Edge支持、Nodejs支持，Chrome不支持，其他浏览器未测试。
从API名字来看很容易联想到setTimeout(0)，不过setImmediate应该算是setTimeout(0)的替代版。  

在IE11/Edge中，setImmediate延迟可以在1ms以内，而setTimeout有最低4ms的延迟，所以setImmediate比setTimeout(0)更早执行回调函数。不过在Nodejs中，两者谁先执行都有可能，原因是Nodejs的事件循环和浏览器的略有差异。  

