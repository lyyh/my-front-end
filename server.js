var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
	res.write('hello')
	res.end();
}).listen(8080,function(){
	console.log('listening port is 8080')
});
