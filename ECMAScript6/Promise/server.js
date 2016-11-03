var express = require('express');
var app = express();
app.use('/data',function(req,res){
	res.set("Access-Control-Allow-Origin","*");
	res.send('hello world');
})
app.listen(3000,function(){
	  console.log('Example app listening on port 3000!');
})