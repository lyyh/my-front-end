var buffer = new Buffer('www.baidu.com','utf-8');
// console.log(buffer)
buffer.write('123',10,5,'GBK');
console.log(buffer.toString())
