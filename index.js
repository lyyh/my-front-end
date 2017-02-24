var http = require('http');
var zlib = require('zlib');
var options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

http.createServer(function(req,res){
	res.writeHead('Access-Control-Allow-Origin','*');
	res.write('123213')
}).listen(8000);