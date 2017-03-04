var express = require('express');
var http = require('http');
var app = new express();
http.createServer(app).listen(8080, function() {
    console.log('listening 8080');
})

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/:fragment', function(req, res, next) {
    var fragment = req.params.fragment
    res.header({ 'Access-Control-Allow-Origin': '*' });
    res.send(fragment);
})
