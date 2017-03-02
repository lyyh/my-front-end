var http = require('http');
var express = require('express');
var app = new express();

app.use('/', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    setTimeout(function() {
        res.json({ a: 1 })
    }, 2000)
})

app.listen(8080, function() {
    console.log(8080)
})
