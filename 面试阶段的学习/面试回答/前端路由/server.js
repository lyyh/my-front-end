var express = require('express');
var app = new express();
http.createServer(app).listen(8080, function() {
    console.log('listening 8080');
})

app.get('/', function(req, res, next) {
    res.header({ 'Access-Control-Allow-Origin': '*' });
    res.send({ hello: 'world' });
})

app.get('/list1',function(req,res,next){
	res.header({ 'Access-Control-Allow-Origin': '*' });
	res.send('list1');
})
