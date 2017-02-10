## generator异步操作的同步化表达
Generator函数的暂停执行的效果，Generator函数的一个重要实际意义就是用来处理异步操作，改写回调函数。  
```
function* main() {
  var result = yield request("http://some.url");
  var resp = JSON.parse(result);
    console.log(resp.value);
}

function request(url) {
  makeAjaxCall(url, function(response){
    it.next(response);
  });
}

var it = main();
it.next();
```

