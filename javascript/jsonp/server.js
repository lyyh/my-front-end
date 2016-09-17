var http = require('http'),
	url = require('url')
	port = 8080;

function onRequest(req,res){
	var query = url.parse(req.url,true).query,
		data = '({"price":123})';
		
	res.write(query.callback+data);
	res.end();
}

http.createServer(onRequest).listen(port,function(err){
	if(err)console.log(err)
	else console.log('listening port is',port);
}) 