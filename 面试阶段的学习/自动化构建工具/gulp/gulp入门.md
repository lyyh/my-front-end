## Gulp
利用Node.js流的威力，可以快速构建项目并减少频繁的IO操作。  

### API
gulp.src:输出（Emits）符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件。该过程用管道流的方式处理。  
gulp.dest:能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。    
gulp.task:定义一个使用 Orchestrator 实现的任务（task）。  
gulp.watch:监听文件，并且可以在文件发生改动时候做一些事情。它总会返回一个 EventEmitter 来发射（emit） change 事件。  


### fn
异步任务支持:接收一个callback，返回一个stream，返回一个promise    

默认的，task 将以最大的并发数执行，也就是说，gulp 会一次性运行所有的 task 并且不做任何等待。如果你想要创建一个序列化的 task 队列，并以特定的顺序执行，你需要做两件事：  
1.给出一个提示，来告知 task 什么时候执行完毕，  
2.并且再给出一个提示，来告知一个 task 依赖另一个 task 的完成。  

```
var gulp = require('gulp');

// 返回一个 callback，因此系统可以知道它什么时候完成
gulp.task('one', function(cb) {
    // 做一些事 -- 异步的或者其他的
    cb(err); // 如果 err 不是 null 或 undefined，则会停止执行，且注意，这样代表执行失败了
});

// 定义一个所依赖的 task 必须在这个 task 执行之前完成
gulp.task('two', ['one'], function() {
    // 'one' 完成后
});

gulp.task('default', ['one', 'two']);
```

