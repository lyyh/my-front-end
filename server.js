// var http = require('http');
// var url = require('url');
var express = require('express');
// var querystring = require('querystring')
var app = express();
var http = require('http');
// http.createServer(function(req, res) {
//     // var query = url.parse(req.url).query;
//     // console.log(querystring.parse(query))
//     res.writeHead(200, { 'Access-Control-Allow-Origin': '*'});
//     res.end('123213');
// }).listen(8080, function() {
//     console.log('listening port is 8080')
// });
app.use('/',function(req,res,next){
	res.send('123123')
})

var server = http.createServer(app);
server.listen(8080,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('listening port is',8080);
	}
})