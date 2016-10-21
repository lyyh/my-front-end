var express = require('express');
var session = require('express-session'); 
var app = express();



app.use('/getSession',function(req,res){
	if(!req.session){
		req.session.timestamp= new Date().getTime();
	}
	res.send(req.session.timestamp)
})
app.use('/getCookie',function(req,res){

})
app.listen(3000,function(err){
	console.log('listening port is',3000)
})