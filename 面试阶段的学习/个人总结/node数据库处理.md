## mysql
获得连接
```
var connection = mysql.createConnectino(config);
```
请求连接的错误处理
```
conn.connect(handleError);

function handleError(err) {
        if (err) {
            // 如果是连接断开，自动重新连接
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error(error.stack);
                console.log("Lost connection. Reconnecting...");
                initConnection(config);
            } else {
                //连接错误，2秒之后再次请求连接
                console.error('error when connecting to db: ');
                setTimeout(initConnection,2000);
            }
        }
    }

    conn.on('error', handleError);  //监听连接错误
```

### mysql断线重连的三种错误
登陆密码错误  
数据库宕机  
数据库连接超时  

### mysql连接池+async
mysql有自带的连接池
```
var pool = mysql.createPool(config);
```
使用一条连接进行操作
```
pool.getConnection(function(err,callback){

})

connection.release(); //释放连接
```
使用async.waterfall流程控制，把每个处理函数的返回处理结果通过回调函数传递给下一个处理函数
```
async.waterfall(tasks, function(err, results) {
        });
```

```
connection.beginTransaction(function(err) {  //开启一个事务
                callback(err);
            })

            connection.commit(function(err) {   //提交事务
                callback(err);
            });

            connection.rollback(); // 发生错误事务回滚
```

