var http = require('http');
var url = require('url');
var express = require('express');
var app = new express();
// http.createServer(function(req,res){
// 	var query = url.parse(req.url).query;
// 	console.log(querystring.parse(query))
// 	res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
// 	res.end('dsfadsf')
// }).listen(8080,function(){
// 	console.log('listening port is 8080')
// });
http.createServer(app).listen(8080, function() {
    console.log('listening 8080');
})

app.get('/', function(req, res, next) {
    res.header({ 'Access-Control-Allow-Origin': '*' });
    res.send({ hello: 'world' });
})
