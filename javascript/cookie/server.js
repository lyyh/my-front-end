var http = require('http'),
	express = require('express'),
	url = require('url');

var app = express();
app.use('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
})

http.createServer(app).listen(8001,function(err){
	console.log('listening port is 8001');
})