## async
async是一个流程控制工具包，直接提供了强大的异步功能。常用的API有map、reduce、filter、forEach.异步流程模式包括，串行(series)，并行(parallel)，瀑布(waterfall)

## 异步流程控制
series:串行执行，一个函数数组中的每个函数，每个函数执行完成之后才能执行下一个函数。   
parallel:并行执行多个函数，每个函数都是立即执行，不需要等待其它函数先执行。传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序。  
waterfall:按顺序