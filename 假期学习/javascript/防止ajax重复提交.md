## 独占性提交
只允许同时存在一次提交操作，并且直到本次提交完成才能进行下一次提交。  
```
module.submit = function() {
  if (this.promise_.state() === 'pending') {
    return
  }
  return this.promise_ = $.post('/api/save')
}
```
## 贪婪型提交
无限制的提交，但是以最后一次操作为准；亦即需要尽快给出最后一次操作的反馈，而前面的操作结果并不重要。  
```
module.submit = function() {
  if (this.promise_.state() === 'pending') {
    this.promise_.abort()
  }
  // todo
}
```


