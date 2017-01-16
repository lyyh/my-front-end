var http = require('http');
var url = require('url');
http.createServer(function(req,res){
	res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
	console.log(url.parse(req.url,true))
	var count = url.parse(req.url,true).query.count;

	setTimeout(function(){
		res.write('{"name":"'+count+'"}');
		res.end();	
	},3000)
}).listen(8080,function(){
	console.log('listening port is 8080')
});
