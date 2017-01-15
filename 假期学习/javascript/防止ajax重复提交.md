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


## 节制性提交
无论提交如何频繁，任意两次有效提交的间隔时间必定会大于或等于某一时间间隔；即以一定频率提交。  
```
module.submit = throttle(150, function() {
  // todo
})
```
如果客户发送每隔100毫秒发送过来10次请求，此模块将只接收其中6个（每个在时间线上距离为150毫秒）进行处理。  

## 懒惰型提交
任意两次提交的间隔时间，必须大于一个指定时间，才会促成有效提交；即不给休息不干活。 