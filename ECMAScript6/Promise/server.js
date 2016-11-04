var express = require('express');
var app = express();
app.use('/getJSON',function(req,res){
	res.set("Access-Control-Allow-Origin","*");
	res.json({'name':'liu'});
})
app.listen(3000,function(){
	  console.log('Example app listening on port 3000!');
})