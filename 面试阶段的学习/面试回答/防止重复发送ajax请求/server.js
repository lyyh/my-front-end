var http = require('http');
var express = require('express');
var app = new express();

app.use('/', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var timer = parseInt(Math.random(2)*1000);
    setTimeout(function() {
        res.send('server 处理时间 '+timer)
    }, timer)
})

app.listen(8080, function() {
    console.log(8080)
})
